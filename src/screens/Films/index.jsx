import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Films({ navigation }) {
  return (
    <SafeAreaView>
      <Text
        onPress={() => {
          navigation.navigate("FilmDetail");
        }}
      >
        Films
      </Text>
    </SafeAreaView>
  );
}
