import React, { useState, useEffect, Component } from 'react'
import { StyleSheet, View, Text, ImageBackground, TextInput, TouchableOpacity, TouchableWithoutFeedback, ScrollView } from 'react-native'
import CustomContainer from '../Components/CustomContainer';

import AuthBackgroundImage from '../Components/AuthBackgroundImage';
import Colors from '../Colors/Colors'
// import { TextInput } from 'react-native-paper'

export default class AccountVerified extends Component {
    handleDone = () => {
        this.props.navigation.navigate('Login')
    }

    render() {
        return (
            <ScrollView>
                <CustomContainer style={{ flex: 1 }}>
                    <AuthBackgroundImage source={require('../../assets/09.png')}
                        Heightstyle={{ height: 150 }}
                        subHeadingStyle="medium"
                        lineStyle={false}
                    />
                    <View style={styles.contentContainer}>
                        <Text style={styles.verficationHeading}>Congratulation</Text>
                        <Text style={styles.otpInfoText}>{`Your acount has been verified`}</Text>
                        <TouchableOpacity onPress={() => this.handleDone()} style={styles.button}>
                            <Text style={styles.buttonText}>DONE</Text>
                        </TouchableOpacity>
                    </View>
                </CustomContainer>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: 'blue',
    },
    backgroundImage: {
        width: '100%',
        height: 200,
        justifyContent: 'flex-end'
    },

    imageOverlayContainer: {
        padding: 25
    },
    contentContainer: {
        flexGrow: 1,
        alignItems: 'center',
        padding: 25,
        paddingTop: 60
    },
    textContainer: {
        flexDirection: 'row',
        marginBottom: 30
    },
    otpInfoText: {
        textAlign: 'center',
        color: Colors.SecondaryText,
        paddingBottom: 25
    },
    verficationHeading: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: Colors.PrimaryText,
        paddingBottom: 25
    },
    button: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary,
        paddingVertical: 15,
        borderRadius: 3,
        elevation: 5,
        marginBottom: 10
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        letterSpacing: 2
    },
    otpResendText: {
        textAlign: 'center',
        color: Colors.lightGrey
    },
    resendOtp: {
        color: Colors.primary,
        fontWeight: 'bold'
    }
})

