import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Role = 'anonymous' | 'visitor' | 'researcher' | 'reviewer' | 'admin';

interface AuthContextType {
  role: Role;
  login: (role: Role) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [role, setRole] = useState<Role>('anonymous');

  const login = (newRole: Role) => {
    setRole(newRole);
  };

  const logout = () => {
    setRole('anonymous');
  };

  return (
    <AuthContext.Provider value={{ role, login, logout }}>
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
