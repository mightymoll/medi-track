// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
	// apiKey is stored in .env file
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "medi-track-95941.firebaseapp.com",
  projectId: "medi-track-95941",
  storageBucket: "medi-track-95941.firebasestorage.app",
  messagingSenderId: "932993247226",
  appId: "1:932993247226:web:b4daa347f1911007cca643"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)