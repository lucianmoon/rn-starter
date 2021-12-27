import React from "react";
import { Text, StyleSheet, Image, View } from "react-native";

const ImageDetail = (props /*imageSource,title,score*/) => {
  return (
    <View>
      <Image source={props.imageSource /*imageSource*/} />
      <Text>{props.title /*title*/}</Text>
      <Text>Image score - {props.score /*score*/}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetail;
