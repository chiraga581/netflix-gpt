// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiQrdSvV0_2BCHtO00AMg2OI1QVcPzd5Y",
  authDomain: "netflixgpt-f963d.firebaseapp.com",
  projectId: "netflixgpt-f963d",
  storageBucket: "netflixgpt-f963d.appspot.com",
  messagingSenderId: "521938062804",
  appId: "1:521938062804:web:42fe5296dafffc18c85a41",
  measurementId: "G-6KQZD3V9XE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();