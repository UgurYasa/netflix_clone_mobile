import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Categories({ navigation }) {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text onPress={() => navigation.navigate("Films")}>
          Categories
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
