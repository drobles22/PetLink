import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCEkAMr6NSvvmZYbLZ__lIwNL4Fu4921jA",
  authDomain: "petsync-a715a.firebaseapp.com",
  projectId: "petsync-a715a",
  storageBucket: "petsync-a715a.firebasestorage.app",
  messagingSenderId: "504143010450",
  appId: "1:504143010450:web:d744636ae35ec98bd8a44b",
  measurementId: "G-LGL51SCKHK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(); 
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();