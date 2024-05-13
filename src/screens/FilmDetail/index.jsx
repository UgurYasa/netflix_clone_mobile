import { StyleSheet, Text, View } from "react-native";
import React from "react";

const FilmDetail = ({navigation}) => {
  return (
    <View>
      <Text
        onPress={() => {
          navigation.navigate("Categories");
        }}
      >
        FilmDetail
      </Text>
    </View>
  );
};

export default FilmDetail;

const styles = StyleSheet.create({});
