import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from "react-native";

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }

    return (
        <View
            style={styles.inputContainer}
        >
            <TextInput
                placeholder="type your Course Goal"
                style={styles.textInput}
                onChangeText={goalInputHandler}
                value={enteredGoal}
            />
            <Button
                title="ADD"
                onPress={props.goalHandler.bind(this, enteredGoal)} />
        </View>
    )
};

const styles = StyleSheet.create({
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
});

export default GoalInput;