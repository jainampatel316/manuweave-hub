import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User, UserRole } from '@/types';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, role: UserRole) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock users for demo
const mockUsers: Record<UserRole, User> = {
  admin: {
    id: '1',
    name: 'Alex Admin',
    email: 'admin@company.com',
    role: 'admin',
    avatar: 'AA'
  },
  manager: {
    id: '2',
    name: 'Morgan Manager',
    email: 'manager@company.com',
    role: 'manager',
    avatar: 'MM'
  },
  operator: {
    id: '3',
    name: 'Oscar Operator',
    email: 'operator@company.com',
    role: 'operator',
    avatar: 'OO'
  },
  inventory: {
    id: '4',
    name: 'Ivy Inventory',
    email: 'inventory@company.com',
    role: 'inventory',
    avatar: 'II'
  }
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string, role: UserRole): Promise<boolean> => {
    // Mock authentication - in real app, this would be an API call
    await new Promise(resolve => setTimeout(resolve, 500)); // Simulate API delay
    
    const mockUser = mockUsers[role];
    if (mockUser) {
      setUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  // Check for stored user on mount
  React.useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <AuthContext.Provider value={{
      user,
      login,
      logout,
      isAuthenticated: !!user
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}