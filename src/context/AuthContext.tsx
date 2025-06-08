
'use client';

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { auth } from '../lib/firebase'; // auth can be null if initialization failed
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  type User as FirebaseUser,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { useRouter } from 'next/navigation';

interface AuthContextType {
  user: FirebaseUser | null;
  loading: boolean;
  signUp: (email, password) => Promise<any>;
  signIn: (email, password) => Promise<any>;
  signInWithGoogle: () => Promise<any>;
  logOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (!auth) {
        console.warn("AuthContext: Firebase auth object is null. Cannot set up onAuthStateChanged. Auth features may not work.");
        setLoading(false); // Stop loading as auth state won't resolve
        return;
    }

    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      console.log('AuthContext: onAuthStateChanged triggered. User UID:', firebaseUser?.uid);
      if (firebaseUser) {
        setUser(firebaseUser);
      } else {
        setUser(null);
      }
      setLoading(false);
      console.log('AuthContext: setLoading(false), user state updated.');
    });

    return () => {
      console.log('AuthContext: Unsubscribing from onAuthStateChanged.');
      unsubscribe();
    };
  }, [auth]); // Added auth to dependency array

  const signUp = (email, password) => {
    if (!auth) return Promise.reject(new Error("Firebase auth not initialized"));
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    if (!auth) return Promise.reject(new Error("Firebase auth not initialized"));
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    if (!auth) return Promise.reject(new Error("Firebase auth not initialized"));
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
    // Note: signInWithRedirect is used in SignInForm/SignUpForm, which is fine.
    // This signInWithGoogle function using signInWithPopup is an alternative if needed elsewhere.
  };

  const logOut = async () => {
    if (!auth) {
      console.warn("AuthContext: Firebase auth not initialized, cannot log out.");
      setUser(null); // Clear local user state
      setLoading(false);
      router.push('/'); // Navigate to home
      return;
    }
    setUser(null);
    await signOut(auth);
    router.push('/');
  };

  const value: AuthContextType = {
    user,
    loading,
    signUp,
    signIn,
    signInWithGoogle,
    logOut,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
