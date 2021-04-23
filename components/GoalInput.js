import React from 'react';
import { Button, StyleSheet, TextInput, View } from "react-native";

const GoalInput = props => {
    return (
        <View
            style={styles.inputContainer}
        >
            <TextInput
                placeholder="type your Course Goal"
                style={styles.textInput}
                onChangeText={props.inputHandler}
            />
            <Button
                title="ADD"
                onPress={props.goalHandler} />
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