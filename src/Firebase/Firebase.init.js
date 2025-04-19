// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2m3wsRTR_jmU-g4WkNlJJ6Iqm9alC5BY",
  authDomain: "fir-conceptual-1-batch-9.firebaseapp.com",
  projectId: "fir-conceptual-1-batch-9",
  storageBucket: "fir-conceptual-1-batch-9.firebasestorage.app",
  messagingSenderId: "1044086275940",
  appId: "1:1044086275940:web:44f9d8a169dfeffa804471",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
