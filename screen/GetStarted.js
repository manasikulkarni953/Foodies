import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import icon library
// import Bottomtab from './screen/Bottomtab'
const GetStarted = () => {
  const navigation = useNavigation();

  const handleLoginPress = () => {
    // Navigate to the login page
    navigation.navigate('login');
  };

  const handleNavigateToBottomTabs = () => {
    // Navigate to the bottom tab screen
    navigation.navigate('Bottomtab');
  };

  return (
    <ImageBackground
      source={require('../assets/Background.jpg')}
      style={styles.backgroundImage}
      resizeMode="cover">
      <View style={styles.container}>
        <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
          <Icon name="sign-in" size={20} color="black" />
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.bottomButton} onPress={handleNavigateToBottomTabs}>
        <Text style={styles.bottomButtonText}>Go to Bottom Tabs</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  },
  loginButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 20,
    padding: 10,
    zIndex: 1, // Ensure the button is above the background image
  },
  loginButtonText: {
    marginLeft: 5,
    color: 'black',
    fontSize: 16,
  },
  bottomButton: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  bottomButtonText: {
    color: 'black',
    fontSize: 16,
  },
});

export default GetStarted;
