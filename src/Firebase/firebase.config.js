// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZxjqFeN6O7UvoOTk0HuiCiJnc3QZAM70",
  authDomain: "assignment-12-homez.firebaseapp.com",
  projectId: "assignment-12-homez",
  storageBucket: "assignment-12-homez.appspot.com",
  messagingSenderId: "907186633581",
  appId: "1:907186633581:web:635c044556cd5bdb537864"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;