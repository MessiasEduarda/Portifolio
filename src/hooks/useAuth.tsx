'use client';

import { useRouter, usePathname } from 'next/navigation';
import { createContext, ReactNode, SetStateAction, useContext, useEffect, useState } from 'react';

export interface User {
  id: number;
  email: string;
  username: string;
}

export interface ILoginResponse {
  jwt: string;
  refreshToken: string;
  user: User;
}

interface IUserProvider {
  user: User;
  setUser: React.Dispatch<SetStateAction<User>>;
  isAuthenticated: boolean;
  logout: () => void;
}

interface ChildrenProps {
  children: ReactNode;
}

const AuthContext = createContext<IUserProvider>({} as IUserProvider);

export function AuthProvider({ children }: ChildrenProps) {
  const [user, setUser] = useState<User>({} as User);
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const dataUser = localStorage.getItem('user');
      if (dataUser) {
        try {
          setUser(JSON.parse(dataUser));
        } catch (error) {
          console.error('Error parsing user data:', error);
        }
      }
    }
    setLoading(false);
  }, []);

  const isAuthenticated = !!user.id;

  const logout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('user');
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
    }
    setUser({} as User);
    router.push('/');
  };

  const publicRoutes = ['/', '/habilidades', '/projetos', '/experiencia', '/contato'];

  useEffect(() => {
    if (!loading && pathname) {
      if (!isAuthenticated && !publicRoutes.includes(pathname)) {
        router.push('/');
      }
    }
  }, [loading, isAuthenticated, pathname, router]);

  if (loading) return null;

  return (
    <AuthContext.Provider value={{ user, setUser, isAuthenticated, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}