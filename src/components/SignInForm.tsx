"use client";
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { useToast } from '../hooks/use-toast';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn, signInWithGoogle } = useAuth();
  const { toast } = useToast();
  const [isPending, setIsPending] = useState(false);
  const [isGooglePending, setIsGooglePending] = useState(false);

  const handleGoogleSignIn = async () => {
    setIsGooglePending(true);
    try {
      await signInWithGoogle();
      toast({
        title: 'Sign in successful!',
        description: 'You have successfully signed in with Google.',
      });
    } catch (error) {
      toast({
        title: 'Error signing in with Google',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setIsGooglePending(false);
    }
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
    <div className="flex flex-col space-y-4">
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
            onChange={(e) => setPassword(e.targe.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <Button disabled={isPending || isGooglePending} type="submit">
          {isPending ? "Signing in..." : "Sign In"}
        </Button>
      </form>
      <Button
        disabled={isPending || isGooglePending}
        onClick={handleGoogleSignIn}
      >
        {isGooglePending ? "Signing in..." : "Sign In with Google"}
      </Button>
    </div>
  );
};

export default SignInForm;