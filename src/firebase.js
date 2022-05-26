// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAeOhDr9dUGEB6L5qaJ5xqgCER71ygUvBg",
  authDomain: "challange-b7815.firebaseapp.com",
  projectId: "challange-b7815",
  storageBucket: "challange-b7815.appspot.com",
  messagingSenderId: "576265888402",
  appId: "1:576265888402:web:749924b6e30786f07ebc4b",
  measurementId: "G-78HQV5RV85",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
