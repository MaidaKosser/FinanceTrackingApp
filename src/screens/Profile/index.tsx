import React from "react";

import { SafeAreaView, Text, View } from "react-native";

import { Button, Select } from "heroui-native";

import styles from "./styles";
import useController from "./useController";

export default function ProfileScreen() {
  const { goToHome } = useController();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Profile Screen 🚀</Text>

        <Button onPress={goToHome}>Go To Home</Button>
        <Select>
          <Select.Trigger>
            <Select.Value placeholder="Select an option" />
            <Select.TriggerIndicator />
          </Select.Trigger>

          <Select.Portal>
            <Select.Overlay />

            <Select.Content presentation="popover" width="trigger">
              <Select.Item value="1" label="Option 1" />

              <Select.Item value="2" label="Option 2" />
            </Select.Content>
          </Select.Portal>
        </Select>
      </View>
    </SafeAreaView>
  );
}
