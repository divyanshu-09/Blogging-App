import firebase from "firebase/app";

import "firebase/firestore";

import "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyDiIuJjnRwQ74BbLri33HglVA4A-oOoX9M",
    authDomain: "blogging-app-26ddd.firebaseapp.com",
    projectId: "blogging-app-26ddd",
    storageBucket: "blogging-app-26ddd.appspot.com",
    messagingSenderId: "678735432925",
    appId: "1:678735432925:web:22f9dd4f40680647611f34"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export const auth = firebase.auth();

let provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

export default firebase;