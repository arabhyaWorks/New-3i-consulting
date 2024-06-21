// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRusxeRjwIcMGF5DaCbxOEJ13xFVD3V_E",
  authDomain: "i-consulting-website.firebaseapp.com",
  databaseURL:
    "https://i-consulting-website-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "i-consulting-website",
  storageBucket: "i-consulting-website.appspot.com",
  messagingSenderId: "5806494174",
  appId: "1:5806494174:web:3778c0c2e03952b29d0d4f",
  measurementId: "G-FXB9WJGJT5",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
export { database };
