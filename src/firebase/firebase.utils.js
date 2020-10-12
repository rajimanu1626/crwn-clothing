import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
        apiKey: "AIzaSyCQ6CmrVuLVaJTnBixFz1WWu5tSqjGkv1E",
        authDomain: "crwn-db-d46d4.firebaseapp.com",
        databaseURL: "https://crwn-db-d46d4.firebaseio.com",
        projectId: "crwn-db-d46d4",
        storageBucket: "crwn-db-d46d4.appspot.com",
        messagingSenderId: "181683253385",
        appId: "1:181683253385:web:d512937859507aebc29658",
        measurementId: "G-K9MQJE4XF6"
};

firebase.initializeApp(config);

export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle=()=>auth.signInWithPopup(provider);

export default firebase;