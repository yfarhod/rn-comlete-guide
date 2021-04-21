import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GoalItem = (props) => {
    return (
        <View style={styles.listItem} >
            <Text>{props.title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    listItem: {
        padding: 5,
        margin: 10,
        backgroundColor: 'grey',
        borderColor: 'black',
        borderWidth: 1
    }
})

export default GoalItem;