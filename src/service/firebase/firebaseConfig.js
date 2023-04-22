import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app)   


/* Para el profesor: las keys comentadas 
REACT_APP_apiKey=AIzaSyBMRwaWdmxvwHxStoZ8eZUKBO5U0K1sgr0
REACT_APP_authDomain=mtg-store-27daf.firebaseapp.com
REACT_APP_projectId=mtg-store-27daf
REACT_APP_storageBucket=mtg-store-27daf.appspot.com
REACT_APP_messagingSenderId=414743513471
REACT_APP_appId=1:414743513471:web:0afdc0e0e2887c2b7f724a
*/