// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {GoogleAuthProvider, getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXBkT_9gEfVFnT7WSWphDw1YpFKQRxrz8",
  authDomain: "today-project-cc596.firebaseapp.com",
  projectId: "today-project-cc596",
  storageBucket: "today-project-cc596.appspot.com",
  messagingSenderId: "893139831443",
  appId: "1:893139831443:web:aace0303a5c2aba5bd1b66",
  measurementId: "G-08HYPD44N1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth()
const provider = new GoogleAuthProvider()

export {auth, provider}