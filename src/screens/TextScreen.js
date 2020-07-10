import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [password, setPassword] = useState("");

  return (
    <View>
      <Text>Enter your password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        secureTextEntry={true}
        onChangeText={(newText) => {
          setPassword(newText);
        }}
      />
      <Text>Your password is {password}</Text>
      {password.length < 4 ? (
        <Text>Password must be more than 4 characters</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
    padding: 0,
  },
});

export default TextScreen;
