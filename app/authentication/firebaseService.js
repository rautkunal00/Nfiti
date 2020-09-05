import * as firebase from 'firebase/app';
import 'firebase/auth';

const config = {
  
    apiKey: "AIzaSyCki4okuNow8__HgBXcAj1x0bjxWaSlyAs",
    authDomain: "nfiti-e002e.firebaseapp.com",
    databaseURL: "https://nfiti-e002e.firebaseio.com",
    projectId: "nfiti-e002e",
    storageBucket: "nfiti-e002e.appspot.com",
    messagingSenderId: "120002813274",
    appId: "1:120002813274:web:2ea1fbdf6cdc08b5b4a763",
    measurementId: "G-DTNNEH5G2G"
}

firebase.initializeApp(config);

export const auth = firebase.auth

export default firebase;