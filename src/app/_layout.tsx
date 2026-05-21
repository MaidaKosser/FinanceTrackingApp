import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      {/* Immersive Rule: Disables mobile system network, clock, and metrics bars layout globally */}
      <StatusBar hidden={true} />

      {/* Expo Router Config: Disables the automatic title index bar header for all views */}
      <Stack
        screenOptions={{
          headerShown: false, // Strict Rule: This forces Expo to drop the index text box entirely!
        }}
      >
        {/* Forces the initial setup routing pointer to target the index layout */}
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </SafeAreaProvider>
  );
}
