import React from "react";

import { SafeAreaView, Text, View } from "react-native";

import { Button } from "heroui-native";

import styles from "./styles";
import useController from "./useController";

export default function HomeScreen() {
  const { goToProfile } = useController();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Home Screen 🚀</Text>

        <Button onPress={goToProfile}>Go To Profile</Button>
      </View>
    </SafeAreaView>
  );
}
