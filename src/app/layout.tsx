import { AuthProvider } from '../context/AuthContext';
import { Toaster } from "@/components/ui/toaster";
import AppLayout from '@/components/layout/AppLayout';
import './globals.css'; // Assuming globals.css is here for fonts etc.

export const metadata = {
  title: 'SilverScreen Studies',
  description: 'Learn film photography.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <AuthProvider>
          <AppLayout>
            {children}
          </AppLayout>
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
