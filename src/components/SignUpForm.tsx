"use client";
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { useToast } from '../hooks/use-toast';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signUp, signInWithGoogle } = useAuth();
  const { toast } = useToast();
  const [isPending, setIsPending] = useState(false);
  const [isGooglePending, setIsGooglePending] = useState(false);

  const handleGoogleSignIn = async () => {
    setIsGooglePending(true);
    try {
      await signInWithGoogle();
      toast({
        title: 'Sign up successful!',
        description: 'You have successfully signed up with Google.',
      });
    } catch (error) {
      toast({
        title: 'Error signing up with Google',
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
      await signUp(email, password);
      toast({
        title: 'Sign up successful!',
        description: 'You have successfully created an account.',
      });
    } catch (error) {
      toast({
        title: 'Error signing up',
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
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <Button disabled={isPending || isGooglePending} type="submit">
          {isPending ? "Creating account..." : "Sign Up"}
        </Button>
      </form>
      <Button
        disabled={isPending || isGooglePending}
        onClick={handleGoogleSignIn}
      >
        {isGooglePending ? "Signing up..." : "Sign Up with Google"}
      </Button>
    </div>
  );
};

export default SignUpForm;