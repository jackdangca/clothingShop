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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };
  
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt:'select_account'});
export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

export default firebase;
