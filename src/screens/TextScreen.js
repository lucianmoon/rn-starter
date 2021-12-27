import React, { useState } from "react";
import {
  StyleSheet,
  Button,
  View,
  FlatList,
  Text,
  TextInput,
} from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View>
      <View style={styles.input}>
        <Text>Enter Name:</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          value={name}
          onChangeText={(newValue) => setName(newValue)}
        />
        <Text>My name is {name}</Text>
      </View>
      <View style={styles.input}>
        <Text>Enter Password:</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          value={password}
          onChangeText={(newValue) => setPassword(newValue)}
        />
        {password.length < 4 ? (
          <Text>Password must be 4 characters</Text>
        ) : null}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});
export default TextScreen;
