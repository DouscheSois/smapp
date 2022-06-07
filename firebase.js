import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJeyweP8c6O-MufRhzxkx5_0Zr4jppdco",
  authDomain: "smapp-e2edd.firebaseapp.com",
  projectId: "smapp-e2edd",
  storageBucket: "smapp-e2edd.appspot.com",
  messagingSenderId: "77839212136",
  appId: "1:77839212136:web:8dd46d324bf640cdf865dd",
  measurementId: "G-6X8LF783W9",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
