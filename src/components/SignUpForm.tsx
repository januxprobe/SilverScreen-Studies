'use client';

import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { useToast } from '../hooks/use-toast';
import { Separator } from './ui/separator';

const GoogleIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2">
    <title>Google</title>
    <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.386-7.439-7.574s3.344-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.85l3.254-3.138C18.189 1.186 15.479 0 12.24 0 5.481 0 0 5.481 0 12.24s5.481 12.24 12.24 12.24c6.759 0 11.979-4.714 11.979-12.049 0-.817-.073-1.559-.205-2.296H12.24z"/>
  </svg>
);

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signUp, signInWithGoogle } = useAuth();
  const { toast } = useToast();
  const [isPending, setIsPending] = React.useState(false);
  const [isGooglePending, setIsGooglePending] = React.useState(false);
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isClient) return;
    setIsPending(true);
    try {
      await signUp(email, password);
      toast({
        title: 'Sign up successful!',
        description: 'You have successfully created an account.',
      });
    } catch (error: any) {
      toast({
        title: 'Error signing up',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setIsPending(false);
    }
  };

  const handleGoogleSignUp = async () => {
    if (!isClient) return;
    setIsGooglePending(true);
    try {
      await signInWithGoogle(); // Firebase handles new user creation with signInWithPopup
      toast({
        title: 'Sign up with Google successful!',
        description: 'You have successfully created an account.',
      });
    } catch (error: any) {
      toast({
        title: 'Error signing up with Google',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setIsGooglePending(false);
    }
  };

  return (
    <div className="w-full max-w-sm">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        {isClient ? (
          <>
            <div>
              <Label htmlFor="email-signup">Email</Label>
              <Input
                type="email"
                id="email-signup"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <Label htmlFor="password-signup">Password</Label>
              <Input
                type="password"
                id="password-signup"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>
          </>
        ) : (
          <>
            {/* Fallback for SSR to prevent hydration mismatch and maintain layout */}
            <div className="space-y-1">
              <Label htmlFor="email-signup-ssr">Email</Label>
              <Input id="email-signup-ssr" disabled placeholder="Enter your email" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password-signup-ssr">Password</Label>
              <Input id="password-signup-ssr" type="password" disabled placeholder="Enter your password" />
            </div>
          </>
        )}
        <Button disabled={isPending || isGooglePending || !isClient} type="submit">
          {isPending ? "Creating account..." : "Sign Up"}
        </Button>
      </form>
      {isClient && (
        <>
          <Separator className="my-4" />
          <Button variant="outline" onClick={handleGoogleSignUp} disabled={isPending || isGooglePending || !isClient} className="w-full">
            {isGooglePending ? (
              "Signing up..."
            ) : (
              <>
                <GoogleIcon />
                Sign Up with Google
              </>
            )}
          </Button>
        </>
      )}
    </div>
  );
};

export default SignUpForm;
