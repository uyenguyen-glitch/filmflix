// Create instance base config which an object that allows us to attach this Firebase app instance to that instance that we have online
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCJVpDQ_ympAzs3-lG9XqyxVAE4ZWwmG8",
  authDomain: "filmflix-bfc32.firebaseapp.com",
  projectId: "filmflix-bfc32",
  storageBucket: "filmflix-bfc32.appspot.com",
  messagingSenderId: "815472706951",
  appId: "1:815472706951:web:0327b9772fd06f2a34ff22",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Google Auth Provider is essentially a class that we get from Firebase Authentication and this is
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  promt: "select_account",
});

// creating instance
export const auth = getAuth();

export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

// Singleton instance allows us now to tell Firebase when we want to get a document or we want

// to set a document or anything like that related to our database

export const db = getFirestore();

// an async function that receives some user authentication object
export const createUserDocFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  // Check user exist?
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      setDoc(userDocRef, {
        displayName,
        email,
        createAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("Error creating the user ", error.message);
    }
  }
};

// Creating auth user with email and password
export const createAuthUserWithEmailPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

// Sign In with email and password
export const signInAuthUserWithEmailPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const onAuthStateChangedListener = (callback) => {
  return onAuthStateChanged(auth, callback);
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
};
