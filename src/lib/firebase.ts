import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  // Your Firebase configuration object here
  apiKey: "AIzaSyDj7lJH247eDT7tZVW9fVA6QQy1m399IKw",
  authDomain: "silverscreenstudies.firebaseapp.com",
  projectId: "silverscreenstudies",
  storageBucket: "silverscreenstudies.firebasestorage.app",
  messagingSenderId: "825329200236",
  appId: "1:825329200236:web:0754541396a6f65dae7c49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;