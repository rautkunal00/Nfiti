import React,{useState} from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import * as Yup from 'yup';
import AuthBackgroundImage from '../Components/AuthBackgroundImage'
import CustomContainer from '../Components/CustomContainer'
import AppFormContainer from '../Components/Form/AppFormContainer'
import AppFormField from '../Components/Form/AppFormField'
import SubmitButton from '../Components/Form/SubmitButton';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Colors from '../Colors/Colors';
import AlereadyHaveAccount from '../Components/AlereadyHaveAccount';
// validation using Yup
const validationSchema = Yup.object().shape({
    username:Yup.string().required().label('Username'),
    email:Yup.string().required().email().label('Email'),
    password:Yup.string().required().min(4).label('Password'),
    phone:Yup.number().required().label('Phone')
})

const handleSubmit = (values,navigation) => {
    // values.phone = '+91'+values.phone;
    console.log(values);
    navigation.navigate('loginSuccess')
//     fetch('https://us-central1-nfiti-e002e.cloudfunctions.net/app/users/signup', {
//     method: 'POST',
//     headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         email:values.email,
//         password:values.password,
//         phoneNumber:'+91'+values.phone,
//         displayName:values.username
//     })
// })
// .then((token)=>{
//     navigation.navigate('passwordChangedScreen')
//     console.log(token)
//     //resetForm({values:''});
// })
// .catch(err=>console.log(err))

}
const SignupScreen = ({navigation}) => {
    const [keyBoard,setKeyBoard] = useState(false);
    return (
        <>
            <CustomContainer >
                <ScrollView>
                    <AuthBackgroundImage source={require('../../assets/signup.png')} 
                        Heightstyle={{height:175}}
                        subHeadingStyle="medium"  
                        subHeading="Create New Account"
                        lineStyle={false}
                    />
                    <View style={styles.signupContainer}>
                        <AppFormContainer
                            initialValues={{username:'',email:'',password:'',phone:''}}
                            onSubmit={(values,navigation) => handleSubmit(values,navigation) }
                            validationSchema={validationSchema}
                        >
                            <AppFormField
                                inputContainerStyle={{borderColor:Colors.primary,borderWidth:1.5,borderRadius:3,paddingLeft:15}}
                                icon="user"
                                autoCorrect={false}
                                autoCapitalize='none'
                                name="username"
                                onFocus={()=>setKeyBoard(false)}
                                placeholder="Username"
                                placeholderTextColor="grey"
                                underlineColor="transparent"
                                underlineColorAndroid="transparent"
                            />
                            <AppFormField 
                                inputContainerStyle={{borderColor:Colors.primary,borderWidth:1.5,borderRadius:3,paddingLeft:15}}
                                icon="mail"
                                autoCorrect={false}
                                autoCapitalize='none'
                                keyBoardType="email"
                                name="email"
                                onFocus={()=>()=>setKeyBoard(false)}
                                placeholder="Email"
                                underlineColor="transparent"
                                placeholderTextColor="grey"
                                underlineColorAndroid="transparent"
                            />
                            <AppFormField 
                                icon="lock"
                                inputContainerStyle={{borderColor:Colors.primary,borderWidth:1.5,borderRadius:3,paddingLeft:15}}
                                autoCorrect={false}
                                secureTextEntry
                                autoCapitalize='none'
                                name="password"
                                onFocus={()=>setKeyBoard(true)}
                                placeholder="Password"
                                placeholderTextColor="grey"
                                underlineColor="transparent"
                                placeholderStyle={{fontFamily:'bold'}}
                            />
                            <AppFormField 
                                icon="phone"
                                inputContainerStyle={{borderColor:Colors.primary,borderWidth:1.5,borderRadius:3,paddingLeft:15}}
                                autoCorrect={false}
                                keyboardType="number-pad"
                                maxLength={10}
                                autoCapitalize='none'
                                name="phone"
                                underlineColor="transparent"
                                onFocus={()=>setKeyBoard(true)}
                                placeholder="Phone no"
                                placeholderTextColor="grey"
                            />
                            <SubmitButton title="SIGN UP"/>
                        </AppFormContainer>
                        <View style={{flexDirection:'row',width:'100%',justifyContent:'center',marginBottom:13}}>
                            <View style={{flex:1,height:0.5,backgroundColor:'#707070',alignSelf:'center'}}></View>
                            <Text style={{color:'#06475A',paddingHorizontal:10,fontFamily:'medium',color:'#06475A',fontSize:14}}>or</Text>
                            <View style={{flex:1,height:0.5,backgroundColor:'#707070',alignSelf:'center'}}></View>
                        </View>
                        <TouchableOpacity style={{flexDirection:'row',borderColor:Colors.primary,borderWidth:2,borderRadius:3,paddingLeft:15,paddingVertical:10}}>
                            <Image source={require('../../assets/google.png')} style={{width:24,height:24}}/>
                            <Text style={{textAlign:'center',alignSelf:'center',flex:1,fontFamily:'bold',color:'#06475A',fontSize:14}}>Continue with Google</Text>
                        </TouchableOpacity>
                        <AlereadyHaveAccount 
                            accountText="Already have an account?"
                            screenText="SIGN IN"
                            onPress={()=>navigation.navigate('Login')}
                        />
                    </View>
                </ScrollView>
            </CustomContainer>
        </>
    )
}

export default SignupScreen

const styles = StyleSheet.create({
    signupContainer:{
        paddingTop:40,
        paddingHorizontal:24,
        backgroundColor:'#FFFFFF'
    }
})
