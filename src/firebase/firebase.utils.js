import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyD3TNha-nKxfgWumBsOU7HfsufdhsW2Wm0",
  authDomain: "score-apple.firebaseapp.com",
  projectId: "score-apple",
  storageBucket: "score-apple.appspot.com",
  messagingSenderId: "852500730159",
  appId: "1:852500730159:web:7dfa5961143d41ea1311da",
  measurementId: "G-MQ780Y8SCR"
};

firebase.initializeApp(config);

export const AUTH = firebase.auth();
export const FIRE_STORE = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account'
});

export const signInWithGoogleAcount = () => AUTH.signInWithPopup(provider);

export default firebase;