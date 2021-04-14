import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.screen}>
      <View
        style={styles.inputContainer}
      >
        <TextInput
          placeholder="Course Goal type here"
          style={styles.textInput}
        />
        <Button title="ADD" />
      </View>
      <View></View>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: { padding: 50 },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textInput: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    marginRight: 5,
    padding: 10,
  }
})

