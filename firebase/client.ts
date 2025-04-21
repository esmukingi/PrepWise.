
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyBBpbfu7EAgEvxnJ79xJQ-BYUKOcUG8qcQ",
  authDomain: "prepwise-d9185.firebaseapp.com",
  projectId: "prepwise-d9185",
  storageBucket: "prepwise-d9185.firebasestorage.app",
  messagingSenderId: "826689726545",
  appId: "1:826689726545:web:eaeecb21148b5eda547070",
  measurementId: "G-XTXSM03D3C"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig): getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);