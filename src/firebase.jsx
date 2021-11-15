import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "Your API key",
  authDomain: "Your authDomain",
  databaseURL: "Your databaseURL",
  projectId: "Your projectId",
  storageBucket: "Your storageBucket",
  messagingSenderId: "Your messagingSenderId",
  appId: "Your appId"
  measurementId: "Your measurementId",
};

firebase.initializeApp(firebaseConfig);

// provider
export const firebase_provider = new firebase.auth.GoogleAuthProvider();

// auth
export const auth = firebase.auth();

// firestore
export const firestore = firebase.firestore();
