// import React, { useState } from 'react'
// import { StyleSheet, Text, View, ScrollView, TouchableWithoutFeedback } from 'react-native';
// import CustomContainer from '../../Components/CustomContainer';
// import * as Yup from 'yup';
// // Icon
// import Colors from '../../Colors/Colors'
// import AppFormField from '../../Components/Form/AppFormField';
// import SubmitButton from '../../Components/Form/SubmitButton';
// import AppFormContainer from '../../Components/Form/AppFormContainer';
// import AuthBackgroundImage from '../../Components/AuthBackgroundImage';
// import AlereadyHaveAccount from '../../Components/AlereadyHaveAccount';
// import BackendError from '../../Components/BackendError';
// import { auth } from '../../authentication/firebaseService';

// import AsyncStorage from '@react-native-community/async-storage';

// // validation using Yup
// const validationSchema = Yup.object().shape({
//     email: Yup.string().required().label('EmailOrPhone'),
//     password: Yup.string().required().min(4).label('Password')
// })

// const storeTOKEN = async (value) => {
//     try {
//         await AsyncStorage.setItem('@storage_TOKEN', value)
//         console.log(value)
//     } catch (err) {
//         this.state.error = err;
//     }
// }


// const handleSubmit = (values, navigation, seterror) => {
//     const { email, password } = values;
//     auth().signInWithEmailAndPassword(email, password)
//         .then((user) => {
//             fetch('https://us-central1-nfiti-e002e.cloudfunctions.net/app/users/getToken', {
//                 method: 'POST',
//                 headers: {
//                     Accept: 'application/json',
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({ email: email })
//             })
//             .then(res => res.json() )
//             .then(res => {
//                 AsyncStorage.setItem('@storage_TOKEN', res.TOKEN)
//                 .then(() => {
//                     navigation.navigate('HomeScreen')
//                 })
//                 .catch((err) => {
//                     console.log(err)
//                     seterror("" + err);
//                 })
//             })
//             .catch((err) => { console.log(err); seterror(err);})

//         })
//         .catch((err) => { console.log(err); seterror("" + err); })

// }

// export default function LoginScreen({ font, navigation }) {
//     const [keyBoard, setKeyBoard] = useState(false);
//     const [error, seterror] = useState(false);

//     return (
//         <>
//             <CustomContainer >
//                 <ScrollView>
//                     <AuthBackgroundImage source={require('../../../assets/09.png')}
//                         Heightstyle={{ height: 250 }}
//                         heading="Welcome"
//                         headingstyle="bold"
//                         subHeading="Company Name"
//                         subHeadingStyle="medium"
//                         lineStyle={true}
//                     />
//                     <BackendError error={error} />
//                     <View style={[styles.loginContainer]}>
//                         <AppFormContainer
//                             initialValues={{ email: '', password: '' }}
//                             onSubmit={(values) => handleSubmit(values, navigation, seterror)}
//                             validationSchema={validationSchema}
//                         >
//                             <AppFormField
//                                 style={{ borderBottomWidth: 1.5, borderBottomColor: Colors.lightGrey, flex: 1, paddingBottom: 10 }}
//                                 icon="user"
//                                 autoCorrect={false}
//                                 autoCapitalize='none'
//                                 keyBoardType="email-address"
//                                 name="email"
//                                 placeholder="Phone no / Email ID"
//                                 placeholderTextColor="grey"
//                                 theme={{ colors: { primary: Colors.darkGrey, underlineColor: 'transparent' } }}
//                             />
//                             <AppFormField
//                                 icon="lock"
//                                 style={{ borderBottomWidth: 1.5, borderBottomColor: Colors.lightGrey, flex: 1, paddingBottom: 10 }}
//                                 autoCorrect={false}
//                                 secureTextEntry
//                                 autoCapitalize='none'
//                                 name="password"
//                                 onFocus={() => setKeyBoard(true)}
//                                 placeholder="Password"
//                                 placeholderTextColor="grey"
//                                 theme={{ colors: { primary: Colors.darkGrey, underlineColor: 'transparent' } }}
//                             />
//                             <SubmitButton title="SIGN IN" />
//                         </AppFormContainer>
//                         <TouchableWithoutFeedback onPress={() => navigation.navigate('forgotYourPassword')}>
//                             <View style={styles.forgotPasswordContainer}>
//                                 <Text style={[styles.forgotPasswordText, { fontFamily: "semiBold" }]}>Forgot password?</Text>
//                             </View>
//                         </TouchableWithoutFeedback>
//                         <AlereadyHaveAccount
//                             accountText="Don’t have an account?"
//                             screenText="SIGN UP"
//                             onPress={() => navigation.navigate('Signup')}
//                         />
//                     </View>
//                 </ScrollView>
//             </CustomContainer>
//         </>
//     )
// }
// const styles = StyleSheet.create({
//     loginContainer: {
//         paddingTop: 25,
//         paddingHorizontal: 24
//     },
//     forgotPasswordText: {
//         textAlign: 'right',
//         fontSize: 14,
//         color: Colors.black,
//         opacity: 0.4
//     },

// })
