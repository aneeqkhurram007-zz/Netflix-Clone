// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBdQkabSx6t0Kf5nJdSc9gSiX_7oHP2rm0",
    authDomain: "netflix-clone-6e593.firebaseapp.com",
    projectId: "netflix-clone-6e593",
    storageBucket: "netflix-clone-6e593.appspot.com",
    messagingSenderId: "612062761866",
    appId: "1:612062761866:web:a49a3167e1b2e92721ee73"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth }
