import React, { useState } from 'react';
import { Button, Modal, StyleSheet, TextInput, View } from "react-native";

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }

    const addGoalHandler = () => {
        props.goalHandler(enteredGoal);
        setEnteredGoal("");
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
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="CANCEL" color="red" onPress={props.onCancel} />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title="ADD"
                            onPress={addGoalHandler} />
                    </View>
                </View>
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
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%'
    },
    button: {
        width: '40%'
    }
});

export default GoalInput;