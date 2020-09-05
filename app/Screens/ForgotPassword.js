import React from 'react'
import { View, ScrollView,StyleSheet} from 'react-native'

import CustomContainer from '../Components/CustomContainer';
import * as Yup from 'yup';
import Colors from '../Colors/Colors'
import AppFormField from '../Components/Form/AppFormField';
import SubmitButton from '../Components/Form/SubmitButton';
import AppFormContainer from '../Components/Form/AppFormContainer';
import AuthBackgroundImage from '../Components/AuthBackgroundImage';
import { NavigationContainer } from '@react-navigation/native';

const validationSchema = Yup.object().shape({
    password:Yup.string().required().min(4).label('Password'),
    confirmPassword:Yup.string().required().min(4).label('ConfirmPassword')
})
const handleSubmit = (values,navigation) => {
    console.log(values)
    navigation.navigate('passwordChangedScreen')
}
const ForgotPassword = ({navigation}) => {
    return (
        <>      
            <CustomContainer >
                <ScrollView>
                    <AuthBackgroundImage source={require('../../assets/09.png')} 
                        Heightstyle={{height:250}} 
                        lineStyle={false}
                    />
                    <View style={[styles.loginContainer]}>
                        <AppFormContainer
                            initialValues={{password:'',confirmPassword:''}}
                            onSubmit={(values) => handleSubmit(values,navigation) }
                            validationSchema={validationSchema}
                        >
                            <AppFormField 
                                style={{borderBottomWidth:1.5,borderBottomColor:Colors.lightGrey,flex:1,paddingBottom:10}}
                                icon="lock"
                                autoCorrect={false}
                                secureTextEntry
                                autoCapitalize='none'
                                name="password"
                                placeholder="New Password"
                                placeholderTextColor="grey"
                                theme={{colors: {primary: Colors.darkGrey, underlineColor: 'transparent'}}}
                            />
                            <AppFormField 
                                icon="lock"
                                style={{borderBottomWidth:1.5,borderBottomColor:Colors.lightGrey,flex:1,paddingBottom:10}}
                                autoCorrect={false}
                                secureTextEntry
                                autoCapitalize='none'
                                name="confirmPassword"
                                // onFocus={()=>setKeyBoard(true)}
                                placeholder="Confirm New Password"
                                placeholderTextColor="grey"
                                theme={{colors: {primary: Colors.darkGrey, underlineColor: 'transparent'}}}
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
    loginContainer:{
        paddingTop:40,
        paddingHorizontal:24
    },
    forgotPasswordText:{
        textAlign:'right',
        fontSize:14,
        color:Colors.black,
        opacity:0.4
    },
    
})