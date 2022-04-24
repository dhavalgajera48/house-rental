import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA8yzN5BuhRH5hbdQD3Rzajume2ixWbaug",
  authDomain: "house-rental-app-34003.firebaseapp.com",
  projectId: "house-rental-app-34003",
  storageBucket: "house-rental-app-34003.appspot.com",
  messagingSenderId: "541680319382",
  appId: "1:541680319382:web:0758eca352ef32f050fbb7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()