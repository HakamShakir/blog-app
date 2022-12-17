// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAx39NkWKKyhDvC_TgA4fFDeVW4r-ZIHwE",
  authDomain: "blog-app-3ed88.firebaseapp.com",
  databaseURL: "https://blog-app-3ed88-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "blog-app-3ed88",
  storageBucket: "blog-app-3ed88.appspot.com",
  messagingSenderId: "639480672906",
  appId: "1:639480672906:web:a7c902524bb75604323373",
  measurementId: "G-MCDV6VZQWP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
