
// src/lib/firebase.ts
import { initializeApp, type FirebaseApp } from "firebase/app";
import { getAuth, getRedirectResult, GoogleAuthProvider, type Auth } from "firebase/auth";

// Firebase configuration provided by the user
const firebaseConfig = {
  apiKey: "AIzaSyDj7lJH247eDT7tZVW9fVA6QQy1m399IKw",
  authDomain: "silverscreenstudies.firebaseapp.com",
  projectId: "silverscreenstudies",
  storageBucket: "silverscreenstudies.firebasestorage.app", // Ensuring user's exact value is used
  messagingSenderId: "825329200236",
  appId: "1:825329200236:web:0754541396a6f65dae7c49"
};

let app: FirebaseApp | undefined;
let authInstance: Auth | null = null;

try {
  console.log("Firebase.ts: Initializing Firebase with hardcoded config:", firebaseConfig);
  app = initializeApp(firebaseConfig);
  authInstance = getAuth(app);
  console.log("Firebase.ts: Firebase app initialized successfully.");
} catch (error) {
  console.error(
      "Firebase.ts: Error initializing Firebase app with hardcoded config. Details:",
      error
  );
  // app remains undefined, authInstance remains null
}

export const auth: Auth | null = authInstance;

if (auth) {
  getRedirectResult(auth)
    .then((result) => {
      if (result) {
        const user = result.user;
        console.log("Firebase.ts: Handled redirect result, user UID:", user?.uid);
        // The onAuthStateChanged listener in AuthContext should pick this up.
      } else {
        // console.log("Firebase.ts: No redirect result to handle upon initial load.");
      }
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Firebase.ts: Error processing getRedirectResult:", {
        code: errorCode,
        message: errorMessage,
        // email: error.customData?.email, // Example of accessing customData
        // credential: errorCode === 'auth/account-exists-with-different-credential' ? GoogleAuthProvider.credentialFromError(error) : undefined, // Example
        fullError: error
      });
    });
} else {
  console.warn(
      "Firebase.ts: Firebase Auth was not initialized. Authentication features will not work. " +
      "This might be due to an issue during Firebase app initialization. " +
      "Please check console errors for more details, including the provided firebaseConfig."
  );
}

export default app;
