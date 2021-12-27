import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    /*the key must be string and unique*/
    /*the hardcode way to add key*/
    /*{ name: "Friend #1", key: "1" }*/
    { name: "Friend #1", age: 20 },
    { name: "Friend #2", age: 21 },
    { name: "Friend #3", age: 22 },
    { name: "Friend #4", age: 23 },
    { name: "Friend #5", age: 24 },
    { name: "Friend #6", age: 25 },
  ];
  return (
    <FlatList
      //   horizontal /* vertical list turn into horizontal list */
      //   showsHorizontalScrollIndicator={
      //     false
      //   } /* disable the horizontal scroll bar */
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
    marginHorizontal: 10,
    fontSize: 20,
  },
});
export default ListScreen;
