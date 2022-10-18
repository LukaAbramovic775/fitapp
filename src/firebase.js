import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA-ALBz3N6VaknteNY18ar1c3bq3Yenlh8",
    authDomain: "fitapp-5580c.firebaseapp.com",
    projectId: "fitapp-5580c",
    storageBucket: "fitapp-5580c.appspot.com",
    messagingSenderId: "223670343357",
    appId: "1:223670343357:web:e9b9fa4de999f7f4c289d4"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

  export {
firebase, db
};