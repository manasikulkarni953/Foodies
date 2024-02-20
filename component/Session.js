import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeUserToken = async (token) => {
  try {
    await AsyncStorage.setItem('userToken', token);
    console.log('User token stored successfully');
  } catch (error) {
    console.error('Error storing user token:', error);
  }
};

export const getUserToken = async () => {
  try {
    return await AsyncStorage.getItem('userToken');
  } catch (error) {
    console.error('Error getting user token:', error);
    return null;
  }
};

export const removeUserToken = async () => {
  try {
    await AsyncStorage.removeItem('userToken');
    console.log('User token removed successfully');
  } catch (error) {
    console.error('Error removing user token:', error);
  }
};