// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsnuZv0BaXYPnCpEEgR5WnH1QBG7Y_k2k",
  authDomain: "mern-stack-project-8c9e6.firebaseapp.com",
  projectId: "mern-stack-project-8c9e6",
  storageBucket: "mern-stack-project-8c9e6.appspot.com",
  messagingSenderId: "785290421350",
  appId: "1:785290421350:web:9b765494ff874c8e9df9a7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
