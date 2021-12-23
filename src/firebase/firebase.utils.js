import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyA5bZafkvT9pQ6-cZu1Gta2WBC5BQAvSGU",
  authDomain: "e-commerce-site-e3833.firebaseapp.com",
  projectId: "e-commerce-site-e3833",
  storageBucket: "e-commerce-site-e3833.appspot.com",
  messagingSenderId: "244685497261",
  appId: "1:244685497261:web:de77494d5992e3ee6bb724",
  measurementId: "G-T4R353PKW8"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  
  const userRef = firestore.doc(`/users/${userAuth.uid}`);
  const snapShot = await userRef.get()

  if (!snapShot.exists) return;

  return userRef
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;