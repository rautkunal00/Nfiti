import React from 'react'
import { View, ScrollView,StyleSheet,Text} from 'react-native'

import CustomContainer from '../Components/CustomContainer';
import * as Yup from 'yup';
import Colors from '../Colors/Colors'
import AppFormField from '../Components/Form/AppFormField';
import SubmitButton from '../Components/Form/SubmitButton';
import AppFormContainer from '../Components/Form/AppFormContainer';
import AuthBackgroundImage from '../Components/AuthBackgroundImage';

const validationSchema = Yup.object().shape({
    number:Yup.number().required().label('Password')
})
const ForgotYourPassword = ({navigation}) => {
    return (
        <>      
            <CustomContainer >
                <ScrollView>
                    <AuthBackgroundImage source={require('../../assets/09.png')} 
                        Heightstyle={{height:250}} 
                        lineStyle={false}
                        subHeading="Forgot Your Password ?"
                        subHeadingStyle="medium"
                    />
                    <View style={[styles.loginContainer]}>
                        <Text style={styles.pinNote}>Do not worry. We'll send pin on your Phone no.</Text>
                        <AppFormContainer
                            initialValues={{number:''}}
                            onSubmit={(values,{resetForm}) => {
                                console.log(values)
                                //navigation.navigate('forgotPasswordOtpScreen')
                                // console.log(values)
                                // resetForm({values:''})
                            } }
                            validationSchema={validationSchema}
                        >
                            <AppFormField 
                                style={{borderBottomWidth:1.5,borderBottomColor:Colors.lightGrey,flex:1,paddingBottom:10}}
                                icon="phone"
                                autoCorrect={false}
                                keyBoardType="number"
                                autoCapitalize='none'
                                name="Number"
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