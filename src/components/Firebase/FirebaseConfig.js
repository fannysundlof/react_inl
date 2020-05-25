import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


require('dotenv').config();

const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY ,
    authDomain: "bokningsystem-b2c3a.firebaseapp.com",
    databaseURL: "https://bokningsystem-b2c3a.firebaseio.com",
    projectId: "bokningsystem-b2c3a",
    storageBucket: "bokningsystem-b2c3a.appspot.com",
    messagingSenderId: "360319226437",
    appId: "1:360319226437:web:8254847a34547803bd492c",
    measurementId: "G-03PEQJXVQX"
  };

  firebase.initializeApp(firebaseConfig);

  

  export const googleProvider = new firebase.auth.GoogleAuthProvider();

  export const auth = firebase.auth();

  export default firebase;