// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-4fed9.firebaseapp.com",
  projectId: "mern-blog-4fed9",
  storageBucket: "mern-blog-4fed9.appspot.com",
  messagingSenderId: "204389796815",
  appId: "1:204389796815:web:63d9fbf58abcd0582ce0ba"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);