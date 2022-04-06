// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9-ve_eb0YtOJ6BX16B1h1eULeGEymoGc",
  authDomain: "simple-firebase-authenti-b6fce.firebaseapp.com",
  projectId: "simple-firebase-authenti-b6fce",
  storageBucket: "simple-firebase-authenti-b6fce.appspot.com",
  messagingSenderId: "1016872984680",
  appId: "1:1016872984680:web:3d0817780956f6a36f5bdd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app