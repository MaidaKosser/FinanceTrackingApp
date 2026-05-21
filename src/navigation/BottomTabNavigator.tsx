import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';
import HomeScreen from '../screens/Home';

// Creating simple placeholder components for tabs under construction so the app runs smoothly
const StatisticsScreen = () => <View style={styles.center}><Text>Statistics Screen</Text></View>;
const BudgetScreen = () => <View style={styles.center}><Text>Budget Screen</Text></View>;
const SettingScreen = () => <View style={styles.center}><Text>Setting Screen</Text></View>;

// Initialize the bottom tab navigation element
const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,           // Hides default top bar headers for a modern look
        tabBarActiveTintColor: '#FF9547', // Sets active tab icon and text color to orange matching your UI
        tabBarInactiveTintColor: '#8A9F96', // Sets inactive items color to a muted tint
        tabBarStyle: styles.tabBar,   // Link custom styling rules defined below
      }}
    >
      {/* Home Tab Screen mapping */}
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ tabBarLabel: 'Home' }}
      />
      
      {/* Statistics Tab Screen mapping */}
      <Tab.Screen 
        name="Statistics" 
        component={StatisticsScreen} 
        options={{ tabBarLabel: 'Statist...' }}
      />
      
      {/* Budget Tab Screen mapping */}
      <Tab.Screen 
        name="Budget" 
        component={BudgetScreen} 
        options={{ tabBarLabel: 'Budget' }}
      />
      
      {/* Setting Tab Screen mapping */}
      <Tab.Screen 
        name="Setting" 
        component={SettingScreen} 
        options={{ tabBarLabel: 'Setting' }}
      />
    </Tab.Navigator>
  );
}

// Layout styling parameters for the navigation elements
const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E8F7F2',
  },
  tabBar: {
    height: 65,
    paddingBottom: 10,
    paddingTop: 10,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
  },
});