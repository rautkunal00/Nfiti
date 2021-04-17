import React, { Component } from 'react'
import { Text, StyleSheet, View,ActivityIndicator } from 'react-native'
import * as Font from 'expo-font';
export default class LoadingScreen extends Component {
    async componentDidMount(){
        await Font.loadAsync({
            bold:require('../../../assets/fonts/Montserrat-Bold.ttf'),
            regular:require('../../../assets/fonts/Montserrat-Regular.ttf'),
            medium:require('../../../assets/fonts/Montserrat-Medium.ttf'),
            semiBold:require('../../../assets/fonts/Montserrat-SemiBold.ttf'),
        })
        this.props.navigation.navigate('Login')
        // check at start

        // firebase.auth().onAuthStateChanged(user => {
        //     if (user) {
        //         return user;
        //     }else{
        //         navigation.navigate('Login');
        //     }
        // });

        // //  getting tocken
        
        // const token = await firebase.auth.currentUser.getIdToken();

    }
    render() {
        return (
            <View style={styles.container}>
                <Text> Loading Screen .....</Text>
                <ActivityIndicator size="large"></ActivityIndicator>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
