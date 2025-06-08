"use client";
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import withAuth from '../components/withAuth';

const LandingPage = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            Unlock Your Photographic Potential
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            From hobbyist to pro, SilverScreen Studies provides the tools and community to master the art of photography. Start your journey today.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Button asChild size="lg">
                                <Link href="/auth">Get Started</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="bg-gray-50 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:text-center">
                        <h2 className="text-base font-semibold leading-7 text-indigo-600">Master Your Craft</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Everything you need to become a better photographer
                        </p>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Our platform is designed to provide a comprehensive learning experience, from interactive lessons to personalized feedback.
                        </p>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                            <div className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    Interactive Lessons
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">
                                    Engage with our hands-on tutorials covering everything from basic composition to advanced lighting techniques.
                                </dd>
                            </div>
                            <div className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    Personalized Feedback
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">
                                    Upload your photos and receive AI-powered feedback to help you improve your skills and develop your unique style.
                                </dd>
                            </div>
                            <div className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    Quizzes & Flashcards
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">
                                    Reinforce your knowledge with our fun and effective learning tools, designed to help you retain what you learn.
                                </dd>
                            </div>
                             <div className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    Community & Resources
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">
                                    Connect with other photographers, share your work, and access our curated library of resources.
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>

            {/* Testimonials Section Placeholder */}
            <div className="py-24 sm:py-32">
                 <div className="mx-auto max-w-7xl px-6 lg:px-8">
                     <div className="mx-auto max-w-2xl lg:text-center">
                         <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                             Trusted by photographers worldwide
                         </h2>
                         <p className="mt-6 text-lg leading-8 text-gray-600">
                            See what our students are saying about their journey with SilverScreen Studies.
                        </p>
                     </div>
                     {/* You can map over your testimonials here */}
                 </div>
            </div>

            {/* Call to Action Section */}
            <div className="bg-gray-50">
                <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
                    <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 text-center shadow-2xl sm:rounded-3xl sm:px-16">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Ready to Start Your Journey?
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            Join a community of passionate photographers and start improving your skills today. Your first lesson is just a click away.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Button asChild size="lg">
                                <Link href="/auth">Sign Up Now</Link>
                            </Button>
                        </div>
                        <svg
                            viewBox="0 0 1024 1024"
                            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
                            aria-hidden="true"
                        >
                            <circle cx={512} cy={512} r={512} fill="url(#8d958450-c69f-4251-94bc-4e091a323369)" fillOpacity="0.7" />
                            <defs>
                                <radialGradient id="8d958450-c69f-4251-94bc-4e091a323369">
                                    <stop stopColor="#7775D6" />
                                    <stop offset={1} stopColor="#E935C1" />
                                </radialGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withAuth(LandingPage, { isPublic: true });