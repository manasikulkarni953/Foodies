import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://your-backend-url/search.php?term=${searchTerm}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const handleIconClick = () => {
    handleSearch(); // Trigger search when the icon is clicked
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleIconClick} style={styles.icon}>
        <Ionicons name="search" size={24} color="black" />
      </TouchableOpacity>
      <TextInput
        placeholder="Search"
        value={searchTerm}
        onChangeText={setSearchTerm}
        style={styles.input}
        onSubmitEditing={handleSearch} // Trigger search when the user presses enter on the keyboard
      />
      <FlatList
        data={searchResults}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
           </View>
        )}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    bottom:15,
    right:18,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginHorizontal: 16,
    elevation: 2,
},
  icon: {
marginRight: 8,
  },
  input: {
    flex: 1,
    marginLeft: 5,
    fontSize: 18,
  },
});

export default SearchBar;
