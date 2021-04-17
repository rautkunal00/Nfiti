import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import CustomContainer from '../../Components/CustomContainer';
import AuthBackgroundImage from '../../Components/AuthBackgroundImage';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Colors from '../../Colors/Colors'

const handleDone = (navigation) => {
    navigation.navigate('Login')
}
const PasswordChangedScreen = ({navigation}) => {
    return (
        <>
            <CustomContainer >
                <ScrollView>
                    <AuthBackgroundImage source={require('../../../assets/09.png')}
                        Heightstyle={{ height: 150 }}
                        lineStyle={false}
                    />
                    <View style={[styles.loginContainer]}>
                        <Text>
                            Password has been changed successfully
                        </Text>
                        <TouchableOpacity onPress={() => handleDone(navigation)} style={styles.button}>
                            <Text style={styles.buttonText}>DONE</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </CustomContainer>
        </>
    )
}

export default PasswordChangedScreen

const styles = StyleSheet.create({
    loginContainer: {
        paddingTop: 40,
        paddingHorizontal: 24
    },
    button: {
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
    }
})


