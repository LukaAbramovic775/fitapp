import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyA-ALBz3N6VaknteNY18ar1c3bq3Yenlh8",
    authDomain: "fitapp-5580c.firebaseapp.com",
    projectId: "fitapp-5580c",
    storageBucket: "fitapp-5580c.appspot.com",
    messagingSenderId: "223670343357",
    appId: "1:223670343357:web:e9b9fa4de999f7f4c289d4"
  };
  
  firebase.initializeApp(firebaseConfig);

  let db = firebase.firestore();
  let storage = firebase.storage();

  
  export { 
    firebase, db, storage 
};