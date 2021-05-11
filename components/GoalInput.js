import React, { useState } from 'react';
import { Button, Modal, StyleSheet, TextInput, View } from "react-native";

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }

    return (
        <Modal visible={props.visible} animationType="slide" >
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
        </Modal>
    )
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    textInput: {
        width: "80%",
        borderColor: "black",
        borderWidth: 1,
        margin: 10,
        padding: 10,
    },
});

export default GoalInput;