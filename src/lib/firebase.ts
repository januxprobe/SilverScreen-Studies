
import { initializeApp, type FirebaseApp } from "firebase/app";
import { getAuth, getRedirectResult, GoogleAuthProvider, type Auth } from "firebase/auth";

// Firebase configuration object, reading from environment variables
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

let app: FirebaseApp | undefined;
let authInstance: Auth | null = null;

const requiredEnvVars = [
  'NEXT_PUBLIC_FIREBASE_API_KEY',
  'NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN',
  'NEXT_PUBLIC_FIREBASE_PROJECT_ID',
  'NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET',
  'NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID',
  'NEXT_PUBLIC_FIREBASE_APP_ID',
];

const missingEnvVars = requiredEnvVars.filter(varName => !process.env[varName]);

if (missingEnvVars.length === 0) {
  try {
    // Ensure all config values are strings as expected by initializeApp
    // although process.env values are already strings or undefined.
    // This check is more for type safety if config came from elsewhere.
    if (Object.values(firebaseConfig).every(value => typeof value === 'string')) {
      app = initializeApp(firebaseConfig);
      authInstance = getAuth(app);
    } else {
      console.error(
        "Firebase configuration values are not all strings. This is unexpected. " +
        "Please check your environment variables."
      );
    }
  } catch (error) {
    console.error(
        "Error initializing Firebase app. This can happen if Firebase config values are present but malformed. Details:",
        error
    );
    // app remains undefined, authInstance remains null
  }
} else {
  console.error(
    "Firebase configuration is missing. " +
    `Please ensure the following environment variables are set in your .env.local file: ${missingEnvVars.join(', ')}. ` +
    "Then, restart your development server."
  );
  // app remains undefined, authInstance remains null
}

export const auth: Auth | null = authInstance;

if (auth) {
  getRedirectResult(auth)
    .then((result) => {
      if (result) {
        // This gives you a Google Access Token. You can use it to access Google APIs.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential?.accessToken; // Token can be retrieved if needed

        // The signed-in user info.
        // const user = result.user; // User info can be retrieved if needed
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }
    }).catch((error) => {
      // Handle Errors here.
      // const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      // const email = error.customData?.email; // Correct way to get email from error
      // The AuthCredential type that was used.
      // const credential = GoogleAuthProvider.credentialFromError(error);
      console.error("Firebase getRedirectResult error:", errorMessage, error);
    });
} else {
  console.warn(
    "Firebase Auth was not initialized. Authentication features will not work. " +
    "This is likely due to missing or incorrect Firebase configuration in your environment variables. " +
    "Please check the console errors above for more details and ensure your .env.local file is correctly set up and the server restarted."
  );
}

// Export app for other Firebase services if needed, can be undefined
export default app;
