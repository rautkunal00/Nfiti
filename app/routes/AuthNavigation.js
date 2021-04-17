import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import LoadingScreen from '../Screens/LoadingScreen';
import LoginScreen from '../Screens/LoginScreen';
import SignupScreen from '../Screens/SignupScreen';
import ForgotYourPassword from '../Screens/ForgotYourPassword';
import ForgotPasswordOtpScreen from '../Screens/ForgotPasswordOtpScreen'
import LoginOtpScreen from '../Screens/LoginOtpScreen'
import PasswordChangedScreen from '../Screens/PasswordChangedScreen';
import ForgotPassword from '../Screens/ForgotPassword';
import HomeScreen from '../Screens/HomeScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import AccountVerified from '../Screens/AccountVerified';

import AsyncStorage from '@react-native-community/async-storage';
const Stack = createStackNavigator();

const TOKEN = null;
AsyncStorage.getItem('@storage_TOKEN').then(TOKEN => { TOKEN = TOKEN; console.log(TOKEN) }).catch(err => console.log(err))

const AuthNavigation = () => {
    return (
        TOKEN == null ?
            <Stack.Navigator>
                <Stack.Screen name="Loding" component={LoadingScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                <Stack.Screen name="forgotPasswordOtpScreen" component={ForgotPasswordOtpScreen} options={{ headerTransparent: true, headerTitle: null, headerTintColor: '#fff' }} />
                <Stack.Screen name="forgotYourPassword" component={ForgotYourPassword} options={{ headerTransparent: true, headerTitle: null, headerTintColor: '#fff' }} />
                <Stack.Screen name="Signup" component={SignupScreen} options={{ headerTransparent: true, headerTitle: null, headerTintColor: '#fff' }} />
                <Stack.Screen name="loginOtp" component={LoginOtpScreen} options={{ headerTransparent: true, headerTitle: null, headerTintColor: '#fff' }} />
                <Stack.Screen name="forgotPassword" component={ForgotPassword} options={{ headerTransparent: true, headerTitle: null, headerTintColor: '#fff' }} />
                <Stack.Screen name="passwordChangedScreen" component={PasswordChangedScreen} options={{ headerShown: false, headerTransparent: true, headerTitle: null, headerTintColor: '#fff' }} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false, headerTransparent: true, headerTitle: null, headerTintColor: '#fff' }} />
                <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false, headerTransparent: true, headerTitle: null, headerTintColor: '#fff' }} />
                <Stack.Screen name="AccountVerified" component={AccountVerified} options={{ headerShown: false, headerTransparent: true, headerTitle: null, headerTintColor: '#fff' }} />
            </Stack.Navigator>
            :
            <Stack.Navigator>
                <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false, headerTransparent: true, headerTitle: null, headerTintColor: '#fff' }} />
                <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false, headerTransparent: true, headerTitle: null, headerTintColor: '#fff' }} />
            </Stack.Navigator>


    )
}

export default AuthNavigation
