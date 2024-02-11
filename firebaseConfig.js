// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCq3y-SH8U4f8KQMcDu4zViSWvVGVsTLM",
  authDomain: "task-manager-ea560.firebaseapp.com",
  projectId: "task-manager-ea560",
  storageBucket: "task-manager-ea560.appspot.com",
  messagingSenderId: "851530489349",
  appId: "1:851530489349:web:a8ccdce5d12cf847abc66c",
  measurementId: "G-DJGEVXEZ7F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
