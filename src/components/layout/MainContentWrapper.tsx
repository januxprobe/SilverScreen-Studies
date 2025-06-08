
'use client';

import type React from 'react';
import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import AppLayout from '@/components/layout/AppLayout';

// Centered full-page loader
const GlobalLoader = () => (
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


export default function MainContentWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { user, loading } = useAuth();

  const publicPaths = ['/', '/signin', '/signup'];
  const isPublicPath = publicPaths.includes(pathname);

  // This effect handles redirection logic
  useEffect(() => {
    if (!loading) { // Only perform redirects once auth state is resolved
      if (user && isPublicPath) {
        // Logged-in user on a public page (e.g., /signin, or / if they land there after login)
        // Redirect them to the main authenticated area, e.g., /home
        router.push('/home');
      } else if (!user && !isPublicPath) {
        // Not logged-in user trying to access a protected page
        // Redirect them to the landing page / (which contains sign-in/sign-up options)
        router.push('/');
      }
    }
  }, [user, loading, isPublicPath, pathname, router]);

  if (loading) {
    return <GlobalLoader />;
  }

  // Determine what to render based on the (now resolved) auth state and path
  // This logic runs *after* loading is false. Redirects from useEffect will trigger a re-render.

  if (user) { // User is logged in
    if (isPublicPath) {
      // User is logged in but on a public path.
      // The useEffect above will redirect them. Show a loader while redirecting.
      return <GlobalLoader />;
    }
    // User is logged in and on a protected page.
    return <AppLayout>{children}</AppLayout>;
  } else { // User is NOT logged in
    if (isPublicPath) {
      // User is not logged in and on a public path (e.g., /, /signin, /signup).
      // Render the content for that public page directly.
      return <>{children}</>;
    }
    // User is not logged in and on a protected page.
    // The useEffect above will redirect them. Show a loader while redirecting.
    return <GlobalLoader />;
  }
}
