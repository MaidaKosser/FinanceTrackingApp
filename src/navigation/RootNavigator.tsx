import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigator from "./BottomTabNavigator";
import ProfileScreen from "../screens/Profile";

// Initialize Native Stack Navigation instance
const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="MainTabs" // Directs the app to launch the Bottom Tab row setup first
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right", // Applies a smooth side-swiping transition movement animation
      }}
    >
      {/* Main Bottom Tab Navigation Wrap Layer */}
      <Stack.Screen name="MainTabs" component={BottomTabNavigator} />

      {/* Deep-link screens accessible from any primary active tab */}
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}
