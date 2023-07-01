// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpNN8D8YNltZwK8AgZxOOk5t6_Wdhl8G4",
  authDomain: "todo-app-crude.firebaseapp.com",
  projectId: "todo-app-crude",
  storageBucket: "todo-app-crude.appspot.com",
  messagingSenderId: "868527096596",
  appId: "1:868527096596:web:d8157c56a5112faacef801"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)