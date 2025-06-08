"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
    onAuthStateChanged, 
    signOut, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';
import { auth } from '../lib/firebase'; // Assuming auth is initialized and exported from firebase.ts

// Create the AuthContext
export const AuthContext = createContext({});

// AuthProvider component
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        if (!auth) {
            console.error("Firebase auth has not been initialized.");
            setLoading(false);
            return;
        }

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser({
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName,
                });
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

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
    };

    const logOut = async () => {
        if (!auth) {
            console.warn("AuthContext: Firebase auth not initialized, cannot log out.");
            setUser(null); // Clear local user state
            router.push('/'); // Navigate to home
            return;
        }
        setUser(null);
        await signOut(auth);
        router.push('/');
    };

    const value = {
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

// Custom hook to use the AuthContext
export const useAuth = () => {
    return useContext(AuthContext);
};