// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjzFZb_L9aAasAFBFsnOGFxS5_OGk-g0A",
  authDomain: "spark-5a6ed.firebaseapp.com",
  projectId: "spark-5a6ed",
  storageBucket: "spark-5a6ed.firebasestorage.app",
  messagingSenderId: "510571280649",
  appId: "1:510571280649:web:fda038c4a48b5e6329fbd8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);