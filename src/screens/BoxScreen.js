import React, { useState } from "react";
import { StyleSheet, Button, View, FlatList, Text } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>BoxScreen1</Text>
      <Text style={styles.textTwoStyle}>BoxScreen2</Text>
      <Text style={styles.textThreeStyle}>BoxScreen3</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
    alignItems: "center", //content alignment
    //flexDirection: "row", //be column or row
    //justifyContent: "space-around",
    height: 200,
  },
  //   textStyle: {
  //     borderWidth: 1,
  //     borderColor: "red",
  //     //margin: 20,
  //   },
  textOneStyle: {
    borderWidth: 1,
    borderColor: "red",
    alignSelf: "stretch",
    flex: 1,
  },
  textTwoStyle: {
    borderWidth: 1,
    borderColor: "red",
    //flex: 1,
    //alignSelf: "stretch",
    position: "absolute",
    fontSize: 18,
  },
  textThreeStyle: {
    borderWidth: 1,
    borderColor: "red",
    //flex: 1,
  },
});
export default BoxScreen;
