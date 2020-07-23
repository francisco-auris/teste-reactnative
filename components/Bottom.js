import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Bottom = () => {
    return (
        <View>
            <Text>Hello</Text>
        </View>
    );
}

const style = StyleSheet.create({
    navigator: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: 200,
        height: 400,
        backgroundColor: '#e74c3c',
        zIndex: 1
    }
});

export default Bottom;