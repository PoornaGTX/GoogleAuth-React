// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJmoGe4GGjIe3k2vQpgRRomid3RxQAFmE",
  authDomain: "auth-dd65d.firebaseapp.com",
  projectId: "auth-dd65d",
  storageBucket: "auth-dd65d.appspot.com",
  messagingSenderId: "746894801698",
  appId: "1:746894801698:web:d23ca1cb6cf38fcf36c37b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();