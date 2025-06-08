
import { initializeApp, type FirebaseApp } from "firebase/app";
import { getAuth, getRedirectResult, type Auth } from "firebase/auth";

// For debugging: Log detected Firebase environment variables
console.log("Firebase.ts: Checking for environment variables at module load...");
const detectedFirebaseEnvVars: Record<string, string | undefined> = {};
for (const key in process.env) {
  if (key.startsWith("NEXT_PUBLIC_FIREBASE_")) {
    detectedFirebaseEnvVars[key] = process.env[key];
  }
}

if (typeof window !== 'undefined') { // Log only in browser console for client-side check
    if (Object.keys(detectedFirebaseEnvVars).length > 0) {
    console.log("Firebase.ts (Client): Detected NEXT_PUBLIC_FIREBASE_ environment variables:", JSON.parse(JSON.stringify(detectedFirebaseEnvVars)));
    } else {
    console.log("Firebase.ts (Client): No NEXT_PUBLIC_FIREBASE_ environment variables detected in process.env.");
    }
}


// Firebase configuration keys that are expected from environment variables
const requiredEnvVars = [
  'NEXT_PUBLIC_FIREBASE_API_KEY',
  'NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN',
  'NEXT_PUBLIC_FIREBASE_PROJECT_ID',
  'NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET',
  'NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID',
  'NEXT_PUBLIC_FIREBASE_APP_ID',
];

let app: FirebaseApp | undefined;
let authInstance: Auth | null = null;

// Check for missing environment variables
const missingEnvVars = requiredEnvVars.filter(varName => !process.env[varName]);

if (missingEnvVars.length === 0) {
  // All required environment variables are present, construct the config
  const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
  };

  try {
    app = initializeApp(firebaseConfig);
    authInstance = getAuth(app);
  } catch (error) {
    console.error(
        "Firebase.ts: Error initializing Firebase app. This can happen if Firebase config values are present but malformed. Details:",
        error
    );
    // app remains undefined, authInstance remains null
  }
} else {
  // Some environment variables are missing
  console.error( // This is the error message you are currently seeing
    "Firebase.ts: Firebase configuration is missing. " +
    `Please ensure the following environment variables are set in your .env.local file: ${missingEnvVars.join(', ')}. ` +
    "Then, restart your development server."
  );
  // authInstance remains null
}

export const auth: Auth | null = authInstance;

if (auth) {
  getRedirectResult(auth)
    .then((result) => {
      if (result) {
        // This means a user signed in via redirect (e.g., Google Sign-In)
        // const user = result.user;
      }
    }).catch((error) => {
      const errorMessage = error.message;
      console.error("Firebase.ts: getRedirectResult error:", errorMessage, error);
    });
} else {
  if (missingEnvVars.length > 0) {
    console.warn(
        "Firebase.ts: Firebase Auth was not initialized because essential environment variables are missing. " +
        "Authentication features will not work. Please check the console error above for details " +
        "on which variables are missing, ensure your .env.local file is correctly set up, and restart the server."
    );
  } else {
     console.warn(
        "Firebase.ts: Firebase Auth was not initialized. Authentication features will not work. " +
        "This might be due to an issue during Firebase app initialization (e.g., malformed config values even if present). " +
        "Please check console errors for more details."
     );
  }
}

// Export app for other Firebase services if needed, can be undefined
export default app;
