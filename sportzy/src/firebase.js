import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAatwDOlppC2Eg5Qx_EQlvdc2acKaSDafw",
  authDomain: "sportzy-b922e.firebaseapp.com",
  projectId: "sportzy-b922e",
  storageBucket: "sportzy-b922e.appspot.com",
  messagingSenderId: "1028211273044",
  appId: "1:1028211273044:web:e8d48032b2968f602c2cc1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
