import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Films from "../screens/Films";
import Categories from "../screens/Categories";
import FilmDetail from "../screens/FilmDetail";

const Stack = createStackNavigator();
const MainRouter = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen 
        name="Films" 
        component={Films} 
        options={({ route }) => ({ 
          title: route.params.category, // İsteğe bağlı: Filmler için başlık belirleme
          path: '/films/:category' // Yeni path belirleme
        })}
      />
      <Stack.Screen name="FilmDetail" component={FilmDetail} />
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default MainRouter;

const styles = StyleSheet.create({});
