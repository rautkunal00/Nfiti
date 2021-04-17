import React, { useState } from 'react'
import { View, ScrollView, StyleSheet, Text } from 'react-native'

import CustomContainer from '../../Components/CustomContainer';
import * as Yup from 'yup';
import Colors from '../../Colors/Colors'
import AppFormField from '../../Components/Form/AppFormField';
import SubmitButton from '../../Components/Form/SubmitButton';
import AppFormContainer from '../../Components/Form/AppFormContainer';
import AuthBackgroundImage from '../../Components/AuthBackgroundImage';
// import { NavigationContainer } from '@react-navigation/native';

import AsyncStorage from '@react-native-community/async-storage';

const validationSchema = Yup.object().shape({
    password: Yup.string().required().min(4).label('Password'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
})

const handleSubmit = (values, navigation, seterror) => {
    AsyncStorage.getItem('@storage_Key')
        .then(phoneNumber => {
            values.phoneNumber = phoneNumber
            console.log(values)
            fetch('https://us-central1-nfiti-e002e.cloudfunctions.net/app/users/updatePassword', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            })
                .then(res => res.status == 200 ? navigation.navigate('passwordChangedScreen') : res.json())
                .then((data) => { data ? seterror(data.msg) : "" })
                .catch((err) => {
                    console.log(err)
                    seterror(err);
                })
        })
        .catch(err => console.log(err))


}
const ForgotPassword = ({ navigation }) => {

    const [error, seterror] = useState(false);
    return (
        <>
            <CustomContainer >
                <ScrollView>
                    <AuthBackgroundImage source={require('../../../assets/09.png')}
                        Heightstyle={{ height: 250 }}
                        lineStyle={false}
                    />
                    <View style={{ height: 40 }}>
                        {error && <Text style={{ textAlign: 'center', color: 'red' }}>{error}</Text>}
                    </View>
                    <View style={[styles.loginContainer]}>
                        <AppFormContainer
                            initialValues={{ password: '', confirmPassword: '' }}
                            onSubmit={(values) => handleSubmit(values, navigation, seterror)}
                            validationSchema={validationSchema}
                        >
                            <AppFormField
                                style={{ borderBottomWidth: 1.5, borderBottomColor: Colors.lightGrey, flex: 1, paddingBottom: 10 }}
                                icon="lock"
                                autoCorrect={false}
                                secureTextEntry
                                autoCapitalize='none'
                                name="password"
                                placeholder="New Password"
                                placeholderTextColor="grey"
                                theme={{ colors: { primary: Colors.darkGrey, underlineColor: 'transparent' } }}
                            />
                            <AppFormField
                                icon="lock"
                                style={{ borderBottomWidth: 1.5, borderBottomColor: Colors.lightGrey, flex: 1, paddingBottom: 10 }}
                                autoCorrect={false}
                                secureTextEntry
                                autoCapitalize='none'
                                name="confirmPassword"
                                placeholder="Confirm New Password"
                                placeholderTextColor="grey"
                                theme={{ colors: { primary: Colors.darkGrey, underlineColor: 'transparent' } }}
                            />
                            <SubmitButton title="UPDATE PASSWORD" />
                        </AppFormContainer>
                    </View>
                </ScrollView>
            </CustomContainer>
        </>
    )
}

export default ForgotPassword
const styles = StyleSheet.create({
    loginContainer: {
        paddingTop: 40,
        paddingHorizontal: 24
    },
    forgotPasswordText: {
        textAlign: 'right',
        fontSize: 14,
        color: Colors.black,
        opacity: 0.4
    },

})