import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  //   const sample1 = "Bye there!";
  //   const sample2 = 123;
  //   const sample3 = ["asd", "qwe"];
  //   const sample4 = ["123", "456"];
  //   const sample5 = <Text>Hi there!</Text>;

  //   return (
  //     <View>
  //       <Text style={styles.textStyle}>This is the Components Screen</Text>
  //       <Text style={styles.subHeaderStyle}>{sample1}</Text>
  //       <Text>{sample2}</Text>
  //       <Text>{sample3}</Text>
  //       <Text>{sample4}</Text>
  //       {sample5}
  //     </View>
  //   );
  //   //      other return method
  //   //   return <View>
  //   //       <Text style={styles.textStyle}>This is the Components Screen</Text>
  //   //       <Text>{sample1}</Text>
  //   //       <Text>{sample2}</Text>
  //   //       <Text>{sample3}</Text>
  //   //       <Text>{sample4}</Text>
  //   //       {sample5}
  //   //     </View>
  const name = "Low Jung Xuan";
  return (
    <View>
      <Text style={styles.textStyle}>Getting started with React Native!</Text>
      <Text style={styles.subHeaderStyle}>My name is {name}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  subHeaderStyle: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
