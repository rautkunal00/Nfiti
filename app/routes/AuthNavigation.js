import React from 'react';
import { createStackNavigator} from '@react-navigation/stack';


// import SideBar from "../Screens/sidebar";
import LoadingScreen from '../Screens/Login/LoadingScreen';
import LoginScreen from '../Screens/Login/LoginScreen';
import SignupScreen from '../Screens/Login/SignupScreen';
import ForgotYourPassword from '../Screens/Login/ForgotYourPassword';
import ForgotPasswordOtpScreen from '../Screens/Login/ForgotPasswordOtpScreen';
import LoginOtpScreen from '../Screens/Login/LoginOtpScreen';
import PasswordChangedScreen from '../Screens/Login/PasswordChangedScreen';
import ForgotPassword from '../Screens/Login/ForgotPassword';
import AccountVerified from '../Screens/Login/AccountVerified';

import HomeScreen from '../Screens/Home';
import ProfileScreen from '../Screens/Profile';
import SuccessPopup from '../Components/SuccessPopup';

import AsyncStorage from '@react-native-community/async-storage';
const Stack = createStackNavigator();

const TOKEN = 5;
AsyncStorage.getItem('@storage_TOKEN')
    .then(TOKEN => {
        TOKEN = TOKEN;
        console.log(TOKEN);
    })
    .catch(err => console.log(err));



const AuthNavigation = () => {
    return TOKEN == null ? (
        <Stack.Navigator>
            <Stack.Screen
                name="Loding"
                <Stack.Screen name="forgotPasswordOtpScreen" component={ForgotPasswordOtpScreen} options={{ headerTransparent: true, headerTitle: null, headerTintColor: '#fff' }} />
                <Stack.Screen name="forgotYourPassword" component={ForgotYourPassword} options={{ headerTransparent: true, headerTitle: null, headerTintColor: '#fff' }} />
                <Stack.Screen name="Signup" component={SignupScreen} options={{ headerTransparent: true, headerTitle: null, headerTintColor: '#fff' }} />
                <Stack.Screen name="loginOtp" component={LoginOtpScreen} options={{ headerTransparent: true, headerTitle: null, headerTintColor: '#fff' }} />
                <Stack.Screen name="forgotPassword" component={ForgotPassword} options={{ headerTransparent: true, headerTitle: null, headerTintColor: '#fff' }} />
                <Stack.Screen name="passwordChangedScreen" component={PasswordChangedScreen} options={{ headerShown: false, headerTransparent: true, headerTitle: null, headerTintColor: '#fff' }} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false, headerTransparent: true, headerTitle: null, headerTintColor: '#fff' }} />
                <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false, headerTransparent: true, headerTitle: null, headerTintColor: '#fff' }} />
                <Stack.Screen name="AccountVerified" component={AccountVerified} options={{ headerShown: false, headerTransparent: true, headerTitle: null, headerTintColor: '#fff' }} />
                name="forgotPasswordOtpScreen"
                component={ForgotPasswordOtpScreen}
                options={{
                    headerTransparent: true,
                    headerTitle: null,
                    headerTintColor: '#fff',
                }}
            />
            <Stack.Screen
                name="forgotYourPassword"
                component={ForgotYourPassword}
                options={{
                    headerTransparent: true,
                    headerTitle: null,
                    headerTintColor: '#fff',
                }}
            />
            <Stack.Screen
                name="Signup"
                component={SignupScreen}
                options={{
                    headerTransparent: true,
                    headerTitle: null,
                    headerTintColor: '#fff',
                }}
            />
            <Stack.Screen
                name="loginOtp"
                component={LoginOtpScreen}
                options={{
                    headerTransparent: true,
                    headerTitle: null,
                    headerTintColor: '#fff',
                }}
            />
            <Stack.Screen
                name="forgotPassword"
                component={ForgotPassword}
                options={{
                    headerTransparent: true,
                    headerTitle: null,
                    headerTintColor: '#fff',
                }}
            />
            <Stack.Screen
                name="passwordChangedScreen"
                component={PasswordChangedScreen}
                options={{
                    headerShown: false,
                    headerTransparent: true,
                    headerTitle: null,
                    headerTintColor: '#fff',
                }}
            />
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    headerShown: false,
                    headerTransparent: true,
                    headerTitle: null,
                    headerTintColor: '#fff',
                }}
            />
            <Stack.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{
                    headerShown: false,
                    headerTransparent: true,
                    headerTitle: null,
                    headerTintColor: '#fff',
                }}
            />
            <Stack.Screen
                name="AccountVerified"
                component={AccountVerified}
                options={{
                    headerShown: false,
                    headerTransparent: true,
                    headerTitle: null,
                    headerTintColor: '#fff',
                }}
            />
            <Stack.Screen
                name="TransportScreen"
                component={TransportScreen}
                options={{
                    headerShown: false,
                    headerTransparent: true,
                    headerTitle: null,
                    headerTintColor: '#fff',
                }}
            />
        </Stack.Navigator>
    ) : (
        <Stack.Navigator>
                options={{
                    headerShown: false,
                    headerTitle: null,
                    headerTintColor: '#fff',
                }}
            />
            <Stack.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{
                    headerShown: false,
                    headerTransparent: true,
                    headerTitle: null,
                    headerTintColor: '#fff',
                }}
            />
            <Stack.Screen
                name="TransportScreen"
                component={TransportScreen}
                options={{
                    headerShown: false,
                    headerTransparent: true,
                    headerTitle: null,
                    headerTintColor: '#fff',
                }}
            />
        </Stack.Navigator>
    );
};

export default AuthNavigation;

