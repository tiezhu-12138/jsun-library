// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIUXCbTSQ2ziWzSbgVcIuMT3TVMj_hNcs",
  authDomain: "w7-jiahang.firebaseapp.com",
  projectId: "w7-jiahang",
  storageBucket: "w7-jiahang.appspot.com",
  messagingSenderId: "1098357010192",
  appId: "1:1098357010192:web:440db447c2b599022eff95"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore()
export default db