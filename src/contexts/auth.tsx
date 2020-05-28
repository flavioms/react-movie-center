import React, { createContext, useState, useEffect } from 'react';
import { UserInfo } from 'firebase';
import { signInGoogle, signInFacebook } from '../services/auth';

interface AuthContextData {
  signed: boolean;
  user: UserInfo | null;
  signInAuthGoogle(): Promise<void>;
  signInAuthFacebook(): Promise<void>;
  signOutAuth(): void;
}
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<UserInfo | null>(null);

  useEffect(() => {
    async function loadStoragedData(): Promise<void> {
      const stotagedUser = localStorage.getItem('@MovieCenter:user');

      if (stotagedUser) {
        setUser(JSON.parse(stotagedUser));
      }
    }
    loadStoragedData();
  }, []);

  async function signInAuthGoogle(): Promise<void> {
    const response = await signInGoogle();
    console.log(response);
    setUser(response);
    localStorage.setItem('@MovieCenter:user', JSON.stringify(response));
  }

  async function signInAuthFacebook(): Promise<void> {
    const response = await signInFacebook();

    setUser(response);
    localStorage.setItem('@MovieCenter:user', JSON.stringify(response));
  }

  function signOutAuth(): void {
    localStorage.removeItem('@MovieCenter:user');
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        signInAuthGoogle,
        signInAuthFacebook,
        signOutAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
