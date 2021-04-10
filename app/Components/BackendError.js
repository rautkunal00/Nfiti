import React from 'react'
import { View, Text } from 'react-native'

const BackendError = ({error}) => {
    return (
        <View style={{paddingTop:15,paddingHorizontal:14,backgroundColor:'#fff'}}>
            {error && <Text style={{ textAlign: 'center', color: 'red' }}>{error}</Text>}
        </View>
    )
}

export default BackendError
