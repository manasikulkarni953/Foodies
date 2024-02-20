import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons for icons
import HomeScreen from './HomeScreen'; // Changed from HomeScreen to Home
import MenusScreen from './MenusScreen'; // Changed from MenusScreen to Menus
import HistoryScreen from './HistoryScreen'; // Changed from HistoryScreen to History

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="HomeScreen">
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false, // Hide header for HomeScreen
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ), // Icon for HomeScreen
        }}
      />
      <Tab.Screen
        name="MenusScreen"
        component={MenusScreen}
        options={{
          headerShown: false, // Hide header for MenusScreen
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="menu" color={color} size={size} />
          ), // Icon for MenusScreen
        }}
      />
      <Tab.Screen
        name="History Screen"
        component={HistoryScreen}
        options={{
          headerShown: false, // Hide header for HistoryScreen
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="time" color={color} size={size} />
          ), // Icon for HistoryScreen
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
