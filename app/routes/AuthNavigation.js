import React from 'react'
import { createStackNavigator} from '@react-navigation/stack';
import LoadingScreen from '../Screens/LoadingScreen';
import LoginScreen from '../Screens/LoginScreen';
import SignupScreen from '../Screens/SignupScreen';
import ForgotYourPassword from '../Screens/ForgotYourPassword';
import ForgotPasswordOtpScreen from '../Screens/ForgotPasswordOtpScreen'
import LoginOtpScreen from '../Screens/LoginOtpScreen'
const Stack = createStackNavigator();
const ForgotPasswordNavigation = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="forgotYourPassword" component={ForgotYourPassword} options={{headerTransparent:true,headerTitle:null,headerTintColor: '#fff'}}/>
            <Stack.Screen name="forgotPasswordOtpScreen" component={ForgotPasswordOtpScreen} options={{headerTransparent:true,headerTitle:null,headerTintColor: '#fff'}}/>
        </Stack.Navigator>
    )
}
const AuthNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Loding" component={LoadingScreen} options={{headerShown:false}}/>
            <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
            <Stack.Screen name="forgotYourPassword" component={ForgotPasswordNavigation} options={{headerTransparent:true,headerTitle:null,headerTintColor: '#fff'}}/>
            <Stack.Screen name="Signup" component={SignupScreen} options={{headerTransparent:true,headerTitle:null,headerTintColor: '#fff'}}/>
            <Stack.Screen name="loginOtp" component={LoginOtpScreen} options={{headerTransparent:true,headerTitle:null,headerTintColor: '#fff'}}/>
        </Stack.Navigator>
    )
}

export default AuthNavigation
