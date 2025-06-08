
import { AuthProvider } from '../context/AuthContext';
import { Toaster } from "@/components/ui/toaster";
import MainContentWrapper from '@/components/layout/MainContentWrapper'; // New import
import './globals.css';

export const metadata = {
  title: 'SilverScreen Studies',
  description: 'Learn film photography.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <AuthProvider>
          <MainContentWrapper>
            {children}
          </MainContentWrapper>
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
