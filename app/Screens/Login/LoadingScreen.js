import React, { Component } from 'react'
import { Text, StyleSheet, View,ActivityIndicator } from 'react-native'
import styled from 'styled-components/native';
import * as Font from 'expo-font';
import * as colors from '../../styles/colors'


export default class LoadingScreen extends Component {
    async componentDidMount(){
        setTimeout(()=>{this.props.navigation.navigate('Login')}, 5000);
        
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
                <StyledListImage source={require('../../../assets/images/logo.png')} style={{width: 300, height: 300}} />
            </View>
        )
    }
}

const StyledListImage = styled.Image`
    padding: 0px;
`;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: colors.PRIMARY
    }
})
