import { View, FlatList, TextInput } from "react-native";
import React, { useEffect } from "react";
import Card from "../../components/Card";
import { useDispatch, useSelector } from "react-redux";
import {
  createRandomList,
  createSortByNew,
  createSortByOld,
  setFilmsFilteredByCategories,
  setFilmsFilteredBySearch,
  setSearch,
} from "../../redux/filmSlice";
import DropdownComponent from "../../components/Dropdown";
const Films = ({ route, navigation }) => {
  const category = route.params.item;

  //REDUX
  const { filteredFilms, search, sortOption, options } = useSelector(
    (state) => state.film
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (sortOption === options[3]) {
      dispatch(createRandomList());
    } else if (sortOption === options[2]) {
      //Burada  Puana gÃ¶re sÄ±ralama yapÄ±lacak fakat veri setinde puan bilgisi olmadÄ±ÄŸÄ± iÃ§in random sÄ±ralama yapÄ±lacak
      dispatch(createRandomList());
    } else if (sortOption === options[1]) {
      dispatch(createSortByOld());
    } else {
      dispatch(createSortByNew());
    }
    dispatch(setSearch(""));
  }, [sortOption]);

  useEffect(() => {
    dispatch(setFilmsFilteredByCategories(category));
  }, []);

  // Arama yaparken filtreleme
  useEffect(() => {
    search.length >= 3 && dispatch(setFilmsFilteredBySearch());
    search.length < 3 && dispatch(setFilmsFilteredByCategories(category));
  }, [search]);

  useEffect(() => {
    dispatch(setFilmsFilteredByCategories(category));
  }, []);

  return (
    <View className="flex flex-1 flex-col bg-white py-5">
      <View className="basis-2/12 flex-col items-center gap-1 relative  ">
        <TextInput
          placeholder="Film / Dizi / Oyuncu ara"
          className="w-10/12 h-10 pl-3 border-2 border-gray-300"
          onChangeText={(text) => dispatch(setSearch(text))}
          value={search}
        />
        <View className="w-10/12 h-10 pl-3 border-2 border-gray-300">
          <DropdownComponent />
        </View>
      </View>
      <FlatList
        className="basis-10/12 mt-5"
        data={filteredFilms.slice(0, 18)}
        renderItem={({ item, index }) => (
          <View className="flex-1">
            <Card
              key={index}
              navigation={navigation}
              title={item.title}
              isCategory={false}
              imageUrl={item.images["Poster Art"].url}
            />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
      />
    </View>
  );
};

export default Films;
