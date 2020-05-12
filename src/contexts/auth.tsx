import React, { createContext, useState } from 'react';
import signIn from '../services/auth';

interface AuthContextData {
  signed: boolean;
  user: object | null;
  signInAuth(): Promise<void>;
}
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<object | null>(null);

  async function signInAuth(): Promise<void> {
    const response = await signIn();
    setUser(response.user);
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signInAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
