import firebase from "firebase";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBSlFCkbds6idFxQP6k1P9gLlITQHZeFYQ",
    authDomain: "lets-chat-anywhere.firebaseapp.com",
    projectId: "lets-chat-anywhere",
    storageBucket: "lets-chat-anywhere.appspot.com",
    messagingSenderId: "810511720737",
    appId: "1:810511720737:web:66f5819f163966e3f71e60",
    measurementId: "G-WYBZ16G575"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;