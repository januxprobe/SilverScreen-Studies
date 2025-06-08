// src/components/SignInForm.tsx
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { useToast } from '../hooks/use-toast';
import {  signInWithRedirect, GoogleAuthProvider } from "firebase/auth";
import { auth } from '../lib/firebase'

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useAuth();
  const { toast } = useToast();
    const [isPending, setIsPending] = React.useState(false);

    const handleGoogleSignIn = async () => {
        const provider = new GoogleAuthProvider();

        signInWithRedirect(auth, provider);
    };

  const handleSubmit = async (e) => {
    e.preventDefault();
        setIsPending(true);
    try {
      await signIn(email, password);
      toast({
        title: 'Sign in successful!',
        description: 'You have successfully signed in.',
      });
    } catch (error) {
      toast({
        title: 'Error signing in',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
            setIsPending(false);
        }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
        />
      </div>
      <Button disabled={isPending} type="submit">
        {isPending ? "Signing in..." : "Sign In"}
      </Button>
        <Button type="button" onClick={handleGoogleSignIn}>
            Sign In with Google
        </Button>
    </form>
  );
};

export default SignInForm;