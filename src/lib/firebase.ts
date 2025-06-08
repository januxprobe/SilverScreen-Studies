
import { initializeApp } from "firebase/app";
import { getAuth, getRedirectResult, GoogleAuthProvider } from "firebase/auth";

// Your Firebase configuration object, now reading from environment variables
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

// Initialize Firebase
// Check if all required environment variables are set before initializing
let app;
if (
  firebaseConfig.apiKey &&
  firebaseConfig.authDomain &&
  firebaseConfig.projectId &&
  firebaseConfig.storageBucket &&
  firebaseConfig.messagingSenderId &&
  firebaseConfig.appId
) {
  app = initializeApp(firebaseConfig);
} else {
  console.error(
    "Firebase configuration is missing. " +
    "Please ensure all NEXT_PUBLIC_FIREBASE_ variables are set in your .env file."
  );
  // Optionally, you could throw an error here or handle it in a way
  // that prevents the app from breaking completely if Firebase isn't configured.
  // For now, auth will fail if app is undefined.
}

export const auth = app ? getAuth(app) : null; // Handle app possibly being undefined

if (auth) {
  getRedirectResult(auth)
    .then((result) => {
      if (result) {
        // This gives you a Google Access Token. You can use it to access Google APIs.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential?.accessToken; // Token can be retrieved if needed

        // The signed-in user info.
        // const user = result.user; // User info can be retrieved if needed
        // console.log(user)
        // ...
      }
    }).catch((error) => {
      // Handle Errors here.
      // const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      // const email = error.email; // Email can be retrieved if needed
      // The AuthCredential type that was used.
      // const credential = GoogleAuthProvider.credentialFromError(error); // Credential can be retrieved if needed
      console.error("Firebase getRedirectResult error:", errorMessage);
      // ...
    });
} else {
  console.warn("Firebase Auth was not initialized due to missing configuration.");
}

export default app;
