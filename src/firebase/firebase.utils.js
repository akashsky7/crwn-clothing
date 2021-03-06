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

export const createUserProfileDocument = async(userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error){
            console.log('error creating user', error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;