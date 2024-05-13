import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectCategory } from "../../redux/filmSlice";

const Subtitle = () => {
  const { selectCategory } = useSelector((state) => state.film);
  const dispatch = useDispatch();
  const path = "/";

  useEffect(() => {
    path === "/" && dispatch(setSelectCategory(""));
  }, [path]);

  return (
    <Text className=" text-3xl font-bold text-white">{`Popüler Başlıklar ${
      selectCategory !== "" ? ": " + selectCategory : ""
    }`}</Text>
  );
};

export default Subtitle;

const styles = StyleSheet.create({});
