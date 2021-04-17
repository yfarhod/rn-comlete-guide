import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...currentGoals, enteredGoal]);
  }

  console.log(courseGoals);

  return (
    <View style={styles.screen}>
      <View
        style={styles.inputContainer}
      >
        <TextInput
          placeholder="type your Course Goal"
          style={styles.textInput}
          onChangeText={goalInputHandler}
        />
        <Button
          title="ADD"
          onPress={addGoalHandler} />
      </View>
      <View>
        {courseGoals.map((goal, key) => <Text>{goal}</Text>)}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: { padding: 50, },
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

