// GC this is code from firebase npm
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeNfKPPoUTVvyvnRGxgrQafmkrH3-T4q8",
  authDomain: "sage-1876f.firebaseapp.com",
  databaseURL: "https://sage-1876f-default-rtdb.firebaseio.com",
  projectId: "sage-1876f",
  storageBucket: "sage-1876f.firebasestorage.app",
  messagingSenderId: "405419613486",
  appId: "1:405419613486:web:4809dff42e518e288a2ebf"
 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export {database}
