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
// validation using Yup
const validationSchema = Yup.object().shape({
    email:Yup.string().required().label('EmailOrPhone'),
    password:Yup.string().required().min(4).label('Password')
})

export default function LoginScreen({font,navigation}) {
    const [keyBoard,setKeyBoard] = useState(false);
        const handleSubmit = (values,{resetForm}) => {
            // fetch('http://localhost:5000/nfiti-e002e/us-central1/app/users/login', {
            // method: 'POST',
            // headers: {
            //     Accept: 'application/json',
            //     'Content-Type': 'application/json'
            // },
            //     body: JSON.stringify({
            //         email: values.email,
            //         password: values.password
            //     })
            // })
            // .then((res) => res.json());
            resetForm({values:''});
        }
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
                            onSubmit={(values,{resetForm}) => {
                                console.log(values)
                                resetForm({values:''})
                            } }
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
                        <TouchableWithoutFeedback onPress={()=>navigation.navigate("loginOtp")}>
                            <Text>OTP</Text>
                        </TouchableWithoutFeedback>
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
