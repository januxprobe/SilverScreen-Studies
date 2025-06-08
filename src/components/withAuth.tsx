// src/components/withAuth.tsx
import React, { useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

const withAuth = (WrappedComponent, options = {}) => {
  const { isPublic = false } = options;

  const WithAuthComponent = (props) => {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!loading) {
        if (isPublic && user) {
          router.push('/home');
        } else if (!isPublic && !user) {
          router.push('/auth');
        }
      }
    }, [user, loading, router]);

    return <WrappedComponent {...props} />;
  };

  return WithAuthComponent;
};

export default withAuth;
