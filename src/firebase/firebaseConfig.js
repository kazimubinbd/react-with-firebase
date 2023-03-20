// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBk0snrbWbAxB3J5O2dRg2XubJknQVEqts",
  authDomain: "simple-login-registratio-1bffa.firebaseapp.com",
  projectId: "simple-login-registratio-1bffa",
  storageBucket: "simple-login-registratio-1bffa.appspot.com",
  messagingSenderId: "813696560629",
  appId: "1:813696560629:web:9c556b1a485cd34d3704bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app