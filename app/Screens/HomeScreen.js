import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const HomeScreen = ({navigation}) => {
    const pressHandler = () => {
        navigation.push('ProfileScreen');
    }

    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button title="Go to profile page" onPress={pressHandler} />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignContent:'center'
    }
})
