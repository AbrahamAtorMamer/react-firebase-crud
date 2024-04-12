import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBFzf_ltMLGCuNyg_vPdYlcTNUUIDm1y2M",
  authDomain: "react-firebase-ce3b2.firebaseapp.com",
  projectId: "react-firebase-ce3b2",
  storageBucket: "react-firebase-ce3b2.appspot.com",
  messagingSenderId: "359183899935",
  appId: "1:359183899935:web:902013a7a302a68b4d642a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);