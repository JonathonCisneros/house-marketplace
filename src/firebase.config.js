import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBc8kYdBpgyseT2qhAY5Poa94KVWVAjRko",
  authDomain: "house-marketplace-app-f10a3.firebaseapp.com",
  projectId: "house-marketplace-app-f10a3",
  storageBucket: "house-marketplace-app-f10a3.appspot.com",
  messagingSenderId: "947396163963",
  appId: "1:947396163963:web:4234f3096c5f18f10ea5de"
};

initializeApp(firebaseConfig);
export const db = getFirestore( ); 