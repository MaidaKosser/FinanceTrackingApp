// Always keep the global stylesheet import at the absolute top
import "./global.css";
import { StatusBar } from "react-native";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { HeroUINativeProvider, ToastProvider } from "heroui-native";

import RootNavigator from "../navigation/RootNavigator";

export default function Index() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <HeroUINativeProvider>
        <ToastProvider>
          <StatusBar hidden={true} />
          <RootNavigator />
        </ToastProvider>
      </HeroUINativeProvider>
    </GestureHandlerRootView>
  );
}
