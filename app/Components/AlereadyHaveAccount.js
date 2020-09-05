import React from 'react'
import { StyleSheet, Text, View,TouchableWithoutFeedback } from 'react-native'

const AlereadyHaveAccount = ({accountText,onPress,screenText}) => {
    return (
        <View style={{marginTop:30,marginBottom:15}}>
            <Text style={[styles.signUpText]}>
                {accountText}
                <TouchableWithoutFeedback onPress={onPress}>
                    <Text style={styles.signUpScreenReq}> {screenText} </Text>
                </TouchableWithoutFeedback>
            </Text>
        </View>
    )
}

export default AlereadyHaveAccount

const styles = StyleSheet.create({
    signUpText:{
        textAlign:'center',
        color:'#A5A5A5',
        fontSize:14,
        fontFamily:'medium'
    },
    signUpScreenReq:{
        color:'#00B4AC',
        fontWeight:'bold',
        fontSize:14,
        fontFamily:'bold'
    }
})
