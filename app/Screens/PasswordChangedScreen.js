import React from 'react'
import { StyleSheet, Text, View,ScrollView } from 'react-native'
import CustomContainer from '../Components/CustomContainer';
import AuthBackgroundImage from '../Components/AuthBackgroundImage';
import { TouchableOpacity } from 'react-native-gesture-handler';
const PasswordChangedScreen = () => {
    return (
        <>      
            <CustomContainer >
                <ScrollView>
                    <AuthBackgroundImage source={require('../../assets/09.png')} 
                        Heightstyle={{height:150}} 
                        lineStyle={false}
                    />
                    <View style={[styles.loginContainer]}>
                        <Text>
                            Password has been changed successfully 
                        </Text>
                        <TouchableOpacity>
                            <Text>
                                Login
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </CustomContainer>
        </>
    )
}

export default PasswordChangedScreen

const styles = StyleSheet.create({
    loginContainer:{
        paddingTop:40,
        paddingHorizontal:24
    }
})
