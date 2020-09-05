import React from 'react'
import { Text,TouchableOpacity,StyleSheet } from 'react-native'
import Colors from '../../Colors/Colors'
function AppButton ({btnTitle,onPress}) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.buttonText}>{btnTitle}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button:{
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:Colors.primary,
        paddingVertical:15,
        borderRadius:3,
        elevation:5,
        marginBottom:13,
        marginTop:10
    },
    buttonText:{
        color:'#fff',
        // fontWeight:'bold',
        fontSize:18,
        letterSpacing:2,
        fontFamily:'medium'
    }
})
export default AppButton
