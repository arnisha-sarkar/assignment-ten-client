// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWXkFaczScnCtoPTVZ2ZIbC8yHybdMCRE",
  authDomain: "website-ten.firebaseapp.com",
  projectId: "website-ten",
  storageBucket: "website-ten.firebasestorage.app",
  messagingSenderId: "456453823435",
  appId: "1:456453823435:web:6ab462fe45d94b0e75344e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
