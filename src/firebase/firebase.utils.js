import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDxq7U65QrMnoLp-RpXFokoZaquDI_QNPA",
    authDomain: "crwn-db-1dc56.firebaseapp.com",
    databaseURL: "https://crwn-db-1dc56.firebaseio.com",
    projectId: "crwn-db-1dc56",
    storageBucket: "crwn-db-1dc56.appspot.com",
    messagingSenderId: "825036605788",
    appId: "1:825036605788:web:232e9ece99e888f1add999",
    measurementId: "G-HT63RWPD1M"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;