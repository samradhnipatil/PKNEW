// Import the functions you need from the SDKs you need
// import * as firebase from "firebase";
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBv25cjQHkRdu9eHKiwxzBWW06ORyIiwys",
    authDomain: "pocketdoctor-ca954.firebaseapp.com",
    projectId: "pocketdoctor-ca954",
    storageBucket: "pocketdoctor-ca954.appspot.com",
    messagingSenderId: "825224183555",
    appId: "1:825224183555:web:491570846557205d917336",
    measurementId: "G-E7XBPF7CWE",
    databaseURL: "https://pocketdoctor-ca954-default-rtdb.asia-southeast1.firebasedatabase.app",
};

const app = initializeApp(firebaseConfig);
// Initialize Firebase
// let app;
// if (firebase.apps.length === 0) {
//   app = firebase.initializeApp(firebaseConfig);
// } else {
//   app = firebase.app()
// }

// const auth = firebase.auth()

export { app };