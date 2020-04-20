import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAUwVanz0KSdadFrDz-Hejcm-HaKRBLGJE",
    authDomain: "clothingshop-4f9c5.firebaseapp.com",
    databaseURL: "https://clothingshop-4f9c5.firebaseio.com",
    projectId: "clothingshop-4f9c5",
    storageBucket: "clothingshop-4f9c5.appspot.com",
    messagingSenderId: "41621577376",
    appId: "1:41621577376:web:b8bbe764e79a9f078733c5",
    measurementId: "G-SFLCZZFCGH"
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt:'select_account'});
export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

export default firebase;
