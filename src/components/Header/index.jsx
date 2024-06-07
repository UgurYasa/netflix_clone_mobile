import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View className="flex flex-row flex-1 bg-slate-900 px-5 items-center justify-between h-96">
      <Text className="text-white font-bold text-2xl">Netflix</Text>
      <TouchableOpacity
        className="px-3 py-1 bg-red-600 border-[1px] border-slate-300"
        onPress={() => {
          //  Deneme Başlat ile ilgili fonksiyon eklenebilir.
        }}
      >
        <Text className="text-white text-center text-xl">Deneme Başlat</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
