import React from 'react';
import { View, StyleSheet } from 'react-native';
import SearchBar from './Searchbar'; // Adjust the path based on the actual location of the SearchBar component

const MenuScreen = () => {
  return (
    <View style={styles.container}>
      {/* Other content of your dashboard home screen */}
      <SearchBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
});

export default MenuScreen;
