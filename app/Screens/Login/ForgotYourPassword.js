import React,{useState} from 'react'
import { View, ScrollView,StyleSheet,Text} from 'react-native'

import CustomContainer from '../../Components/CustomContainer';
import * as Yup from 'yup';
import Colors from '../../Colors/Colors'
import AppFormField from '../../Components/Form/AppFormField';
import SubmitButton from '../../Components/Form/SubmitButton';
import AppFormContainer from '../../Components/Form/AppFormContainer';
import AuthBackgroundImage from '../../Components/AuthBackgroundImage';

import AsyncStorage from '@react-native-community/async-storage';

const validationSchema = Yup.object().shape({
    number:Yup.number().required().label('Password')
})
const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('@storage_Key', value)
    } catch (err) {
        this.state.error = err;
    }
  }

const handleSubmit = (values,navigation,seterror) => {
    values.number = "+91" + values.number;
    storeData(values.number)
    console.log(values)
    fetch('https://us-central1-nfiti-e002e.cloudfunctions.net/app/users/forgetPassword', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ phoneNumber: values.number })
            })
            .then(res => res.status == 200 ? navigation.navigate('forgotPasswordOtpScreen') : res.json())
            .then((data) => { data ?  seterror(data.msg) : "" })
            .catch((err) => {
                console.log(err)
                seterror(err);
            })
}
const ForgotYourPassword = ({navigation}) => {
    
    const [error,seterror] = useState(false);
    return (
        <>      
            <CustomContainer >
                <ScrollView>
                    <AuthBackgroundImage source={require('../../../assets/09.png')} 
                        Heightstyle={{height:250}} 
                        lineStyle={false}
                        subHeading="Forgot Your Password ?"
                        subHeadingStyle="medium"
                    />
                    <View style={{ height: 40 }}>
                            {error && <Text style={{ textAlign: 'center', color: 'red' }}>{error}</Text>}
                        </View>
                    <View style={[styles.loginContainer]}>
                        <Text style={styles.pinNote}>Do not worry. We'll send pin on your Phone no.</Text>
                        <AppFormContainer
                            initialValues={{number:''}}
                            onSubmit={(values) => handleSubmit(values,navigation,seterror)  }
                            validationSchema={validationSchema}
                        >
                            <AppFormField 
                                style={{borderBottomWidth:1.5,borderBottomColor:Colors.lightGrey,flex:1,paddingBottom:10}}
                                icon="phone"
                                autoCorrect={false}
                                keyboardType="numeric"
                                maxLength={10}
                                autoCapitalize='none'
                                name="number"
                                placeholder="Enter Your Phone Number"
                                placeholderTextColor="grey"
                                theme={{colors: {primary: Colors.darkGrey, underlineColor: 'transparent'}}}
                            />
                            <SubmitButton title="NEXT" />
                        </AppFormContainer>
                    </View>
                </ScrollView>
            </CustomContainer>
        </>
    )
}

export default ForgotYourPassword
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
    pinNote:{
        textAlign:'center',
        fontFamily:'regular',
        fontSize:16,
        letterSpacing:0.32,
        lineHeight:19,
        color:Colors.SecondaryText,
        paddingHorizontal:20,
        marginBottom:50
    }
})