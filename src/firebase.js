import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAOwaD1i7XlX-zDmQebCCv_Hj9CVzMtSZ4",
  authDomain: "clone-3c5f8.firebaseapp.com",
  projectId: "clone-3c5f8",
  storageBucket: "clone-3c5f8.appspot.com",
  messagingSenderId: "698136676940",
  appId: "1:698136676940:web:8001ef6cf8020b8782c2e9",
  measurementId: "G-8X5JM8SVXH",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
