import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_SECRET_KEY,
  authDomain: 'sportzy-b922e.firebaseapp.com',
  projectId: "sportzy-b922e",
  storageBucket: "sportzy-b922e.appspot.com",
  messagingSenderId: "1028211273044",
  appId: process.env.REACT_APP_APP_ID
};

// Initialize Firebase
const ap = initializeApp(firebaseConfig);
export const firestore = getFirestore(ap);

export {ap};