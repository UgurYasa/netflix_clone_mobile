import { StyleSheet, View, ScrollView, StatusBar } from "react-native";
import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/Card";
import { extractCategories } from "../../redux/filmSlice";
const Categories = ({ navigation }) => {
  console.log(navigation.category);
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.film);

  useEffect(() => {
    dispatch(extractCategories());
  }, []);
  return (
    <View className="flex flex-1 bg-white py-5">
      <ScrollView className="flex-1">
        {categories.map((category, index) => (
          <Card
            key={index}
            navigation={navigation}
            title={category.categoriesName}
            imageUrl={category.categoriesImage}
            isCategory={true}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({});
