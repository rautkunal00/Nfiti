import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'

export default function AuthBackgroundImage({heading,subHeading,overlayStyle,subHeadingStyle,Heightstyle,headingstyle,lineStyle,...otherProps}) {
    return (
        <ImageBackground {...otherProps} style={[styles.backgroundImage,Heightstyle]}>
            <View style={styles.imageOverlayContainer}>
                {lineStyle && <View style={styles.line}></View>}
                {heading && <Text style={[styles.heading,{fontFamily:headingstyle}]}>{heading}</Text>}
                {subHeading && <Text style={[styles.subHeading,{fontFamily:subHeadingStyle}]}>{subHeading}</Text>}
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backgroundImage:{
        width:'100%',
        justifyContent:'flex-end',
    },
    imageOverlayContainer:{
        padding:24
    },
    line:{
        width:40,
        height:2,
        backgroundColor:'#fff',
        borderRadius:8,
        marginBottom:10
    },
    heading:{
        fontSize:18,
        color:'#fff',
        fontWeight:'800',
        marginBottom:5
    },
    subHeading:{
        fontSize:16,
        color:'#fff'
    }
})
