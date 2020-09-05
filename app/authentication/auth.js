import axios from 'axios';
import {auth} from './firebase-service';
var provider = new firebase.auth.GoogleAuthProvider();

provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

// export const createUserAccount = (data) => {
//   return 
//     fetch('')
//   axios.post('https://your-api-url/auth/signup', data)
//     .then(res => res.data)
// }


export const loginUser = (email, password) => {
  return auth().signInWithEmailAndPassword(email, password);
}
 
export const signUpWithGoogle = () => {
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
    });
}

// load home screen or any autorizes page

// import {auth} from './firebase-service';
// import { NavigationContainer } from '@react-navigation/native';

// export const gethomeScreen = async () => {
// const token = await auth.currentUser.getIdToken();

// return axios.get('https://your-api-url/homeScreen', {headers:  
//   { authorization: `Bearer ${token}` }})
//   .then(res => res.data);
// }