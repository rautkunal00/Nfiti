import React, { useState, useEffect, Component } from 'react'
import { StyleSheet, View, Text, ImageBackground, TextInput, TouchableOpacity, TouchableWithoutFeedback, ScrollView } from 'react-native'
import CustomContainer from '../Components/CustomContainer';

import AuthBackgroundImage from '../Components/AuthBackgroundImage';
import Colors from '../Colors/Colors'
// import { TextInput } from 'react-native-paper'

export default class LoginOtpScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pin1: "",
            pin2: "",
            pin3: "",
            pin4: "",
            error: false
        }
    }
    submitOtp = () => {
        if (this.state.pin1 != '' && this.state.pin2 != '' && this.state.pin3 != '' && this.state.pin4 != '') {
            var OTP = "" + this.state.pin1 + this.state.pin2 + this.state.pin3 + this.state.pin4 + ""
            console.log(this.props)
            fetch('https://us-central1-nfiti-e002e.cloudfunctions.net/app/users/otp', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ OTP: OTP })
            })
             .then(() => {
                    this.setState({ pin1: '', pin2: '', pin3: '', pin4: '' })
                    this.props.navigation.navigate('AccountVerified')
                    //resetForm({values:''});
                })
                .catch((err) => {
                    console.log(err)
                    this.state.error = err;
                })
        }
    }
    componentDidMount() {
        this.refs.pin1ref.focus()
    }
    render() {
        const { pin1, pin2, pin3, pin4 } = this.state;
        return (
            <ScrollView>
                <CustomContainer style={{ flex: 1 }}>
                    <AuthBackgroundImage source={require('../../assets/09.png')}
                        Heightstyle={{ height: 150 }}
                        subHeading="Two Step Verification"
                        subHeadingStyle="medium"
                        lineStyle={false}
                    />
                    <View style={styles.contentContainer}>
                        <Text style={styles.verficationHeading}>Verification Code</Text>
                        <Text style={styles.otpInfoText}>{`Plese type the OTP sent to your \nmobile number`}</Text>
                        <View style={styles.inputContainer}>
                            <View style={styles.textContainer}>
                                <View>
                                    <TextInput
                                        placeholder="-"
                                        placeholderTextColor={Colors.SecondaryText}
                                        onChangeText={(pin1) => {
                                            this.setState({ pin1: pin1 })
                                            if (pin1 != "") { this.refs.pin2ref.focus() }
                                        }}
                                        value={pin1}
                                        ref={"pin1ref"}
                                        maxLength={1}
                                        keyboardType='numeric'
                                        style={styles.input}
                                    />
                                </View>
                                <View>
                                    <TextInput
                                        placeholder="-"
                                        placeholderTextColor={Colors.SecondaryText}
                                        onChangeText={(pin2) => {
                                            this.setState({ pin2: pin2 })
                                            if (pin2 != "") this.refs.pin3ref.focus()
                                        }}
                                        value={pin2}
                                        ref={"pin2ref"}
                                        keyboardType="numeric"
                                        maxLength={1}
                                        style={styles.input}
                                    />
                                </View>
                                <View>
                                    <TextInput
                                        placeholder="-"
                                        placeholderTextColor={Colors.SecondaryText}
                                        onChangeText={(pin3) => {
                                            this.setState({ pin3: pin3 })
                                            if (pin3 != "") this.refs.pin4ref.focus()
                                        }}
                                        value={pin3}
                                        ref={"pin3ref"}
                                        keyboardType="numeric"
                                        maxLength={1}
                                        style={styles.input}
                                    />
                                </View>
                                <View>
                                    <TextInput
                                        placeholder="-"
                                        placeholderTextColor={Colors.SecondaryText}
                                        onChangeText={(pin4) => this.setState({ pin4: pin4 })}
                                        value={pin4}
                                        ref={"pin4ref"}
                                        keyboardType="numeric"
                                        maxLength={1}
                                        style={styles.input}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={{ height: 40 }}>
                            {this.state.error && <Text style={{ textAlign: 'center', color: 'red' }}>Please Enter Valid details</Text>}
                        </View>
                        <TouchableOpacity onPress={() => this.submitOtp()} style={styles.button}>
                            <Text style={styles.buttonText}>VERIFY</Text>
                        </TouchableOpacity>
                        <View style={{ marginTop: 30 }}>
                            <Text style={styles.otpResendText}>
                                Not received OTP ?
                                <TouchableWithoutFeedback onPress={() => console.log("OTP RESEND")}>
                                    <Text style={styles.resendOtp}> RESEND</Text>
                                </TouchableWithoutFeedback>
                            </Text>
                        </View>
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
    input: {
        height: 50,
        width: 50,
        borderRadius: 0,
        borderColor: Colors.darkGrey,
        borderWidth: 1,
        backgroundColor: Colors.primaryLight,
        marginRight: 5,
        textAlign: 'center',
        color: Colors.primary,
        fontWeight: 'bold',
        fontSize: 18
    }, button: {
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

