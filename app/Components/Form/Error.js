import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Error = ({error,style,visible}) => {
    
    return (
        <View style={[styles.errorContainer,{height:20}]}>
            {(!visible || !error) ?  null :  <Text style={[style]}>{error}</Text>}
        </View>
    )
}

export default Error

const styles = StyleSheet.create({
    errorContainer:{
        marginBottom:7
    }
})
