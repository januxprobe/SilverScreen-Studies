
import { initializeApp, type FirebaseApp } from "firebase/app";
import { getAuth, getRedirectResult, type Auth } from "firebase/auth";

// Firebase configuration provided by the user
const firebaseConfig = {
  apiKey: "AIzaSyDj7lJH247eDT7tZVW9fVA6QQy1m399IKw",
  authDomain: "silverscreenstudies.firebaseapp.com",
  projectId: "silverscreenstudies",
  storageBucket: "silverscreenstudies.appspot.com", // Corrected typical storage bucket format
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
        // This means a user signed in via redirect (e.g., Google Sign-In)
        // const user = result.user;
        console.log("Firebase.ts: Handled redirect result, user:", result.user?.uid);
      }
    }).catch((error) => {
      const errorMessage = error.message;
      console.error("Firebase.ts: getRedirectResult error:", errorMessage, error);
    });
} else {
  console.warn(
      "Firebase.ts: Firebase Auth was not initialized. Authentication features will not work. " +
      "This might be due to an issue during Firebase app initialization (e.g., malformed config values even if present). " +
      "Please check console errors for more details."
  );
}

// Export app for other Firebase services if needed, can be undefined
export default app;
