"use client";
// src/app/page.tsx
import React from 'react';
import SignUpForm from '../components/SignUpForm';
import SignInForm from '../components/SignInForm';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';

const LandingPage = () => {
  const { user } = useAuth();
  const router = useRouter();

  if (user) {
    router.push('/home');
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          SilverScreen Studies
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Master the art of photography.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">WHY</h2>
          <p className="text-gray-600">
            We believe that anyone can become a great photographer. Our mission is to provide you with the knowledge and tools to unlock your creative potential and capture stunning images.
          </p>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">HOW</h2>
          <p className="text-gray-600">
            We provide interactive lessons, quizzes, and personalized feedback to help you learn at your own pace. Our platform is designed to be engaging, effective, and fun.
          </p>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">WHAT</h2>
          <p className="text-gray-600">
            We offer a comprehensive curriculum covering everything from the basics of photography to advanced techniques. You'll have access to a library of resources, a supportive community, and expert guidance.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
          <SignUpForm />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Sign In</h2>
          <SignInForm />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;