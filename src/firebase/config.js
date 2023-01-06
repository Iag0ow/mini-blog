// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVoXLfvzvI94bJhX-oO512W_RsAqpmU1Q",
  authDomain: "miniblog-b6986.firebaseapp.com",
  projectId: "miniblog-b6986",
  storageBucket: "miniblog-b6986.appspot.com",
  messagingSenderId: "385417140013",
  appId: "1:385417140013:web:d96126b3a853b4934665a4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
