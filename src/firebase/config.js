// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCqtIxwczygqreTCtt2GGwOt5I1y4DOJjs",
    authDomain: "proy-prueba-8437f.firebaseapp.com",
    projectId: "proy-prueba-8437f",
    storageBucket: "proy-prueba-8437f.appspot.com",
    messagingSenderId: "1073146188861",
    appId: "1:1073146188861:web:832731acce584303f10654"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp( firebaseConfig )
export const FirebaseAuth = getAuth( FirebaseApp )
export const FirebaseDB   = getFirestore( FirebaseApp )