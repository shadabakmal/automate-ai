// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
 authDomain: "automate-ai-9581b.firebaseapp.com",
  projectId: "automate-ai-9581b",
  storageBucket: "automate-ai-9581b.firebasestorage.app",
  messagingSenderId: "929534846837",
  appId: "1:929534846837:web:6d66f3ca38b1f338f8d53c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();

