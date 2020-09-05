import React,{useState} from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableWithoutFeedback} from 'react-native';
import CustomContainer from '../Components/CustomContainer';
import * as Yup from 'yup';
// Icon
import Colors from '../Colors/Colors'
import AppFormField from '../Components/Form/AppFormField';
import SubmitButton from '../Components/Form/SubmitButton';
import AppFormContainer from '../Components/Form/AppFormContainer';
import AuthBackgroundImage from '../Components/AuthBackgroundImage';
import AlereadyHaveAccount from '../Components/AlereadyHaveAccount';
import {auth} from '../authentication/firebaseService';
// validation using Yup
const validationSchema = Yup.object().shape({
    email:Yup.string().required().label('EmailOrPhone'),
    password:Yup.string().required().min(4).label('Password')
})
const handleSubmit = (values,navigation) => {
    const {email, password } = values;
        auth().signInWithEmailAndPassword(email, password)
        .then((user)=>{
            navigation.navigate('passwordChangedScreen')
            //resetForm({values:''});
        }
        )
        .catch((err)=>console.log(err)) 
}

export default function LoginScreen({font,navigation}) {
    const [keyBoard,setKeyBoard] = useState(false);
       
    return (
        <>      
            <CustomContainer >
                <ScrollView>
                    <AuthBackgroundImage source={require('../../assets/09.png')} 
                        Heightstyle={{height:250}} 
                        heading="Welcome"
                        headingstyle="bold"
                        subHeading="Company Name"
                        subHeadingStyle="medium"
                        lineStyle={true}
                    />
                    <View style={[styles.loginContainer]}>
                        <AppFormContainer
                            initialValues={{email:'',password:''}}
                            onSubmit={(values,{resetForm}) => handleSubmit(values,navigation) }
                            validationSchema={validationSchema}
                        >
                            <AppFormField 
                                style={{borderBottomWidth:1.5,borderBottomColor:Colors.lightGrey,flex:1,paddingBottom:10}}
                                icon="user"
                                autoCorrect={false}
                                autoCapitalize='none'
                                keyBoardType="email-address"
                                name="email"
                                placeholder="Phone no / Email ID"
                                placeholderTextColor="grey"
                                theme={{colors: {primary: Colors.darkGrey, underlineColor: 'transparent'}}}
                            />
                            <AppFormField 
                                icon="lock"
                                style={{borderBottomWidth:1.5,borderBottomColor:Colors.lightGrey,flex:1,paddingBottom:10}}
                                autoCorrect={false}
                                secureTextEntry
                                autoCapitalize='none'
                                name="password"
                                onFocus={()=>setKeyBoard(true)}
                                placeholder="Password"
                                placeholderTextColor="grey"
                                theme={{colors: {primary: Colors.darkGrey, underlineColor: 'transparent'}}}
                            />
                            <SubmitButton title="SIGN IN" />
                        </AppFormContainer>
                        <TouchableWithoutFeedback onPress={()=>navigation.navigate('forgotYourPassword')}>
                            <View style={styles.forgotPasswordContainer}>
                                <Text style={[styles.forgotPasswordText,{fontFamily: "semiBold"}]}>Forgot password?</Text>
                            </View>
                        </TouchableWithoutFeedback>
                        <AlereadyHaveAccount 
                            accountText="Don’t have an account?"
                            screenText="SIGN UP"
                            onPress={()=>navigation.navigate('Signup')}
                        />
                    </View>
                </ScrollView>
            </CustomContainer>
        </>
    )
}
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
