import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import LoadingScreen from '../Screens/Login/LoadingScreen';
import LoginScreen from '../Screens/Login/LoginScreen';
import SignupScreen from '../Screens/Login/SignupScreen';
import ForgotYourPassword from '../Screens/Login/ForgotYourPassword';
import ForgotPasswordOtpScreen from '../Screens/Login/ForgotPasswordOtpScreen'
import LoginOtpScreen from '../Screens/Login/LoginOtpScreen'
import PasswordChangedScreen from '../Screens/Login/PasswordChangedScreen';
import ForgotPassword from '../Screens/Login/ForgotPassword';
import AccountVerified from '../Screens/Login/AccountVerified';

import HomeScreen from '../Screens/Home';
import ProfileScreen from '../Screens/Profile';

import AsyncStorage from '@react-native-community/async-storage';
const Stack = createStackNavigator();

const TOKEN = 5;
AsyncStorage.getItem('@storage_TOKEN').then(TOKEN => { TOKEN = TOKEN; console.log(TOKEN) }).catch(err => console.log(err))

const AuthNavigation = () => {
    return (
        TOKEN == null ?
            <Stack.Navigator>
                <Stack.Screen name="Loding" component={LoadingScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
            :
            <Stack.Navigator>
                <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false, headerTransparent: true, headerTitle: null, headerTintColor: '#fff' }} />
                <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false, headerTransparent: true, headerTitle: null, headerTintColor: '#fff' }} />
            </Stack.Navigator>


    )
}

export default AuthNavigation
