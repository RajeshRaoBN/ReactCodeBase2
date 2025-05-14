// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { getFirestore, collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from 'firebase/firestore';// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvmZKhU4Fhb8WHFC0aIT15_RwIHlQHLQE",
  authDomain: "project-two-2cb02.firebaseapp.com",
  projectId: "project-two-2cb02",
  storageBucket: "project-two-2cb02.firebasestorage.app",
  messagingSenderId: "715109636249",
  appId: "1:715109636249:web:b5ae5abc2df514bc46c008",
  measurementId: "G-84RG3WSC22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, signInWithPopup, signOut, db, collection, addDoc, query, orderBy, onSnapshot, serverTimestamp };