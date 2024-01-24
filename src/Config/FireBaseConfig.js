// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAV7WCqzl3ox8z3a7g01zZ4c6McytQ4W0",
  authDomain: "inflowmp.firebaseapp.com",
  projectId: "inflowmp",
  storageBucket: "inflowmp.appspot.com",
  messagingSenderId: "579182180028",
  appId: "1:579182180028:web:dcc9130a15c3350e8142b9",
  measurementId: "G-5B6DRT5DGC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);