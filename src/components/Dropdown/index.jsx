import { setSortOption } from "../../redux/filmSlice";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { useDispatch, useSelector } from "react-redux";

const DropdownComponent = () => {
  const { options, sortOption } = useSelector((state) => state.film);
  const dispatch = useDispatch();
  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={options}
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder="Select item"
      searchPlaceholder="Search..."
      value={sortOption}
      onChange={(item) => {
        dispatch(setSortOption(item));
      }}
      //   renderLeftIcon={() => (
      //     <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
      //   )}
    />
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  dropdown: {
    height: "100%",
    borderBottomColor: "gray",
    borderBottomWidth: 0.5,
    width: "100%",
    paddingLeft: 10,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
