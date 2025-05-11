
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBKPmFU2j2RJFpy3_x2WDJr6jZOrqsHhIw",
  authDomain: "interviewprep-6e940.firebaseapp.com",
  projectId: "interviewprep-6e940",
  storageBucket: "interviewprep-6e940.firebasestorage.app",
  messagingSenderId: "410037355137",
  appId: "1:410037355137:web:272c9637c6aea889aa4380",
  measurementId: "G-2V46EJG8NC"
};


const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();


export const auth = getAuth(app);
export const db = getFirestore(app)