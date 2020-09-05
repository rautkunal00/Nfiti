import React from 'react'
import { StyleSheet, Text, View ,SafeAreaView} from 'react-native'
import Constants from 'expo-constants';
export default function CustomContainer({children,style}) {
    return (
        <SafeAreaView style={[styles.safeAreaAndroid,style]}>
            <View style={styles.view}>{children}</View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeAreaAndroid:{
        paddingTop:Constants.statusBarHeight,
        flex:1,
        //justifyContent:'center',
    },
    view:{
        flex:1
        //justifyContent:'center'
    }
})
