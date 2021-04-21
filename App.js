import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import GoalItem from './components/GoalItem';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: enteredGoal }]);
  }

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
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => <GoalItem title={itemData.item.value} />}
      />
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

