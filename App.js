import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GetStarted from './screen/GetStarted';
import Login from './screen/login';
import ForgotPassword from './screen/forgotpassword';
import CreateAccount from './screen/createaccount'; // Capitalized component name
import Bottomtab from './screen/Bottomtab';
import  SearchBar  from './screen/Searchbar';
import AddToCart from './screen/AddToCart';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GetStarted">
        <Stack.Screen
          name="GetStarted"
          component={GetStarted}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CreateAccount"
          component={CreateAccount}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Bottomtab"
          component={Bottomtab}
          options={{
            headerShown: false, // Hide the header for Bottomtab screen
          }}
        />
        <Stack.Screen
          name="Searchbar"
          component={SearchBar}
          options={{
            headerShown: false, 
          }}
        />
        <Stack.Screen
          name="AddToCart"
          component={AddToCart}
          options={{
            headerShown: false, 
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
