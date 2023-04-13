import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBMRwaWdmxvwHxStoZ8eZUKBO5U0K1sgr0",
  authDomain: "mtg-store-27daf.firebaseapp.com",
  projectId: "mtg-store-27daf",
  storageBucket: "mtg-store-27daf.appspot.com",
  messagingSenderId: "414743513471",
  appId: "1:414743513471:web:0afdc0e0e2887c2b7f724a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app)   