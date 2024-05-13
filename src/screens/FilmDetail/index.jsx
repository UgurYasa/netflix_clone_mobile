import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectFilm } from "../../redux/filmSlice";

const FilmDetail = (props) => {
  
const title = props.route.params.item;

  const { selectFilm } = useSelector((state) => state.film);
  const dispatch = useDispatch();
  const liste = [
    { label: "Title:", value: selectFilm && selectFilm.title },
    { label: "Release Year:", value: selectFilm && selectFilm.releaseYear },
    { label: "Category:", value: selectFilm && selectFilm.programType },
    { label: "Description:", value: selectFilm && selectFilm.description },
  ];
  useEffect(() => {
    dispatch(setSelectFilm(title));
  }, [title]);
  return (
    <View className="flex-1  items-center gap-1 py-5">
      <View className="w-3/6 h-1/2">
        <Image
          source={selectFilm && { uri: selectFilm.images["Poster Art"].url }}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "fill",
            borderWidth: 1,
            borderColor: "black",
            borderRadius: 12,
          }}
        />
      </View>
      <ScrollView className="flex flex-col bg-slate-400 w-5/6 p-1 rounded-xl mb-1">
        {liste.map((item, index) => (
          <Text className="text-base my-2" key={index}>
            <Text className="font-bold text-xl">{item.label} </Text>
            {item.value}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
};

export default FilmDetail;

const styles = StyleSheet.create({});

