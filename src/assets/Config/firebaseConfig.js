// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyAzX-JkkBHsS1YQ_daLJOUbfJKRQKAxybw",
  authDomain: "contactapp-6e55f.firebaseapp.com",
  projectId: "contactapp-6e55f",
  storageBucket: "contactapp-6e55f.firebasestorage.app",
  messagingSenderId: "659678223577",
  appId: "1:659678223577:web:80dd64a4d52a97b41e32c8",
  measurementId: "G-0ZLHHY1EBT"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app)