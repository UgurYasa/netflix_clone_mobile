import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import AntDesign from "@expo/vector-icons/AntDesign";

const Footer = () => {
  return (
    <View className="flex flex-col flex-1 bg-slate-900 px-1 items-center justify-between">
      <View className="flex flex-row items-center justify-evenly py-1 basis-1/2">
        <Pressable
          onPress={() => {
            //Anasayfa ile ilgili fonksiyon eklenebilir.
          }}
        >
          <Text className="text-white text-base">Anasayfa</Text>
        </Pressable>
        <Text className="text-white text-base mx-1">|</Text>
        <Pressable
          onPress={() => {
            //Kullanıcı Sözleşmesi ile ilgili fonksiyon eklenebilir.
          }}
        >
          <Text className="text-white text-base">Kullanıcı Sözleşmesi</Text>
        </Pressable>

        <Text className="text-white text-base mx-1">|</Text>
        <Pressable
          onPress={() => {
            //Gizlilik Sözleşmesi ile ilgili fonksiyon eklenebilir.
          }}
        >
          <Text className="text-white text-base">Gizlilik Sözleşmesi</Text>
        </Pressable>
      </View>
      <View className=" flex flex-1 flex-row gap-x-5">
        <EvilIcons name="sc-facebook" size={28} color="white" />
        <AntDesign name="twitter" size={28} color="white" />
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({});
