import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
    const pressHandler = (screenName = 'ProfileScreen') => {
        navigation.push(screenName);
    };

    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button title="Go to profile page" onPress={pressHandler} />
            <Button
                title="Transport"
                onPress={() => pressHandler('TransportScreen')}
            />
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
});
