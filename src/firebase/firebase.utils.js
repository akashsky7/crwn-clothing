import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD-1GpPbUIYAMIj9A1U03HScinJPMrWZ9w",
    authDomain: "crwn-db-31c02.firebaseapp.com",
    projectId: "crwn-db-31c02",
    storageBucket: "crwn-db-31c02.appspot.com",
    messagingSenderId: "574225158825",
    appId: "1:574225158825:web:8d97a03d9d64f3342f0fb8",
    measurementId: "G-SBKSM57MLG"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;