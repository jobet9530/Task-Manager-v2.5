import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBCq3y-SH8U4f8KQMcDu4zViSWvVGVsTLM",
  authDomain: "task-manager-ea560.firebaseapp.com",
  projectId: "task-manager-ea560",
  storageBucket: "task-manager-ea560.appspot.com",
  messagingSenderId: "851530489349",
  appId: "1:851530489349:web:a8ccdce5d12cf847abc66c",
  measurementId: "G-DJGEVXEZ7F",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default analytics;
