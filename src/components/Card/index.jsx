import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  Pressable,
  View,
} from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { setSearch, setSelectCategory } from "../../redux/filmSlice";
const Card = ({ navigation, imageUrl, title, isCategory = false }) => {
  const { width, height } = Dimensions.get("window");
  const path = title.replaceAll(" ", "_").toLowerCase();
  const dispatch = useDispatch();

  return (
    <View className="flex flex-1 items-center my-5 justify-center gap-3 w-full h-full">
      <Pressable
        className="flex-1 items-center "
        onPress={() => {
          if (isCategory) {
            navigation.navigate("Films", { item: title });
            dispatch(setSelectCategory(title));
          } else {
            navigation.navigate("FilmDetail", {});
            dispatch(setSearch(""));
          }
        }}
      >
        <Image
          source={{ uri: imageUrl }}
          style={{
            width: isCategory ? width / 2 : width / 3,
            height: isCategory ? height / 3 : height / 5,
            borderRadius: 10,
            borderWidth: 1,
            backgroundColor: "black",
            borderColor: "black",
            objectFit: "fill",
          }}
        />

        <Text
          className={`${
            isCategory ? "text-2xl font-bold " : " text-base font-semibold"
          } capitalize`}
        >
          {title}
        </Text>
      </Pressable>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({});
