// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "car-m arketplace-d093a.firebaseapp.com",
  projectId: "car-marketplace-d093a",
  storageBucket: "car-marketplace-d093a.firebasestorage.app",
  messagingSenderId: "956095211683",
  appId: "1:956095211683:web:5d67ed9d0a3905d38af716",
  measurementId: "G-EEZR2Q56TN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app);