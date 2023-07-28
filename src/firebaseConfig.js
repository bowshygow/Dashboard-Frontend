// frontend/src/firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyADLOIKu9RWDbmXcSyaqjAUmaSYPy9Hv74",
    authDomain: "dashboard-8f7e6.firebaseapp.com",
    projectId: "dashboard-8f7e6",
    storageBucket: "dashboard-8f7e6.appspot.com",
    messagingSenderId: "1055837432572",
    appId: "1:1055837432572:web:4a8a9b34292a66433fc579",
    measurementId: "G-HX0LH9CZNL"
  };

const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);
const analytics = getAnalytics(firebase);

export default auth;
