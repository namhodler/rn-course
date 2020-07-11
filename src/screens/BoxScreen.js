import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.text1Style} />
      <View style={styles.text2Style} />
      <View style={styles.text3Style} />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text1Style: {
    width: 80,
    height: 80,
    backgroundColor: "red",
  },
  text2Style: {
    width: 80,
    height: 80,
    backgroundColor: "green",
    top: 80,
  },
  text3Style: {
    width: 80,
    height: 80,
    backgroundColor: "blue",
  },
});

export default BoxScreen;
