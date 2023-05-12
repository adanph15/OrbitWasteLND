// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWYesWYnj3S45BXJ1dkHNxOTcImrG0ees",
  authDomain: "orbitwaste-4c6aa.firebaseapp.com",
  databaseURL: "https://orbitwaste-4c6aa-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "orbitwaste-4c6aa",
  storageBucket: "orbitwaste-4c6aa.appspot.com",
  messagingSenderId: "907842142070",
  appId: "1:907842142070:web:cac38953fac378fcde8457",
  measurementId: "G-GZGFSSMCYE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

export default database;