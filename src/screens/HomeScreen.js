import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <Button
        onPress={() => props.navigation.navigate("Components")}
        title="Go to Componenets Demo"
      />
      {/* <TouchableOpacity onPress={() => props.navigation.navigate("List")}>
        <Text>Go to List Demo</Text>
        <Text>Go to List Demo</Text>
        <Text>Go to List Demo</Text>
      </TouchableOpacity> */}
      <Button
        onPress={() => props.navigation.navigate("List")}
        title="Go to List Demo"
      />
      <Button
        onPress={() => props.navigation.navigate("Image")}
        title="Go to Image Demo"
      />
      <Button
        onPress={() => props.navigation.navigate("Counter")}
        title="Go to Counter Demo"
      />
      <Button
        onPress={() => props.navigation.navigate("Color")}
        title="Go to Color Demo"
      />
      <Button
        onPress={() => props.navigation.navigate("Square")}
        title="Go to Square Demo"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
