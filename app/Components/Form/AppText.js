import React from 'react'
import { StyleSheet, Text, View,TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons'; 
import { } from 'react-native-paper';

export default function AppText({icon,signUpStyle,inputFieldStyle,...otherProps}) {
    return (
        <View style={[styles.inputIconContainer,signUpStyle]}>
            {icon && <Feather name={icon} size={24} style={styles.iconStyle} color="#2E2E2E" />}
            <TextInput style={[styles.inputField,inputFieldStyle]} {...otherProps}/>
        </View>
    )
}

const styles = StyleSheet.create({
    iconStyle:{
        marginRight:10,
        alignSelf:'center'
    },
    inputIconContainer:{
        flexDirection:'row',
        marginBottom:8
    },
    inputField:{
        //borderBottomWidth:StyleSheet.hairlineWidth,
        flex:1,
        height:40,
        //backgroundColor:'#fff',
        // paddingBottom:5,
        
        color:'grey',
        // fontWeight:'400',
        borderBottomColor:'transparent'
    }
})
