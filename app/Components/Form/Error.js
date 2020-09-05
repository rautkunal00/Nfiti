import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Error = ({error,style,visible}) => {
    // if(!visible || !error) return null
    return (
        <View style={styles.errorContainer}>
            <Text style={[style]}>{error}</Text>
        </View>
    )
}

export default Error

const styles = StyleSheet.create({
    errorContainer:{
        marginBottom:7
    }
})
