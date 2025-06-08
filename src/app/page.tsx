
"use client";
// src/app/page.tsx
import React, { useEffect } from 'react';
import SignUpForm from '@/components/SignUpForm';
import SignInForm from '@/components/SignInForm';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const LandingPage = () => {
  const { user, loading } = useAuth();
  const router = useRouter();

    useEffect(() => {
        // Only redirect if loading is complete and a user exists.
        if (!loading && user) {
            router.push('/home');
        }
    }, [user, loading, router]);

     // Show a loading indicator while the auth state is loading.
    if (loading) {
        return (
          <div className="flex items-center justify-center min-h-screen w-full bg-background">
            <div className="flex flex-col items-center gap-2">
                <svg className="animate-spin h-10 w-10 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <p className="text-muted-foreground">Loading...</p>
            </div>
          </div>
        );
    }

  return (
    <div className="container mx-auto px-4 py-12 sm:py-16">
      <div className="text-center mb-12 sm:mb-16">
        <h1 className="text-4xl font-headline font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
          SilverScreen Studies
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
          Master the art of photography. Explore interactive lessons, test your knowledge, and get AI-powered feedback.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 sm:mb-16">
        <div className="text-center p-4 rounded-lg bg-card/50 shadow-sm">
          <h2 className="text-2xl font-headline font-semibold mb-3 text-primary">Why</h2>
          <p className="text-card-foreground/80">
            Unlock your creative potential. We provide the knowledge and tools to help you capture stunning film photographs.
          </p>
        </div>
        <div className="text-center p-4 rounded-lg bg-card/50 shadow-sm">
          <h2 className="text-2xl font-headline font-semibold mb-3 text-primary">How</h2>
          <p className="text-card-foreground/80">
            Learn at your own pace with interactive lessons, practical quizzes, and personalized AI feedback on your work.
          </p>
        </div>
        <div className="text-center p-4 rounded-lg bg-card/50 shadow-sm">
          <h2 className="text-2xl font-headline font-semibold mb-3 text-primary">What</h2>
          <p className="text-card-foreground/80">
            A comprehensive curriculum from basics to advanced techniques, resource directories, and a focus on artistic development.
          </p>
        </div>
      </div>

      <div className="w-full max-w-lg mx-auto">
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-center text-3xl font-headline">
              Join SilverScreen Studies
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="signin" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="signin">Sign In</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>
              <TabsContent value="signin">
                <SignInForm />
              </TabsContent>
              <TabsContent value="signup">
                <SignUpForm />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LandingPage;
