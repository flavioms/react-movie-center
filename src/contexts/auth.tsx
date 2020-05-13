import React, { createContext, useState, useEffect } from 'react';
import signIn from '../services/auth';

interface AuthContextData {
  signed: boolean;
  user: object | null;
  signInAuth(): Promise<void>;
  signOutAuth(): void;
}
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<object | null>(null);

  useEffect(() => {
    async function loadStoragedData(): Promise<void> {
      const stotagedUser = localStorage.getItem('@MovieCenter:user');

      if (stotagedUser) {
        setUser(JSON.parse(stotagedUser));
      }
    }
    loadStoragedData();
  }, []);

  async function signInAuth(): Promise<void> {
    const response = await signIn();

    setUser(response);
    localStorage.setItem('@MovieCenter:user', JSON.stringify(response));
  }

  function signOutAuth(): void {
    localStorage.removeItem('@MovieCenter:user');
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, signInAuth, signOutAuth }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
