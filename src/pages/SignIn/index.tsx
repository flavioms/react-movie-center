import React, { useContext } from 'react';
import AuthContext from '../../contexts/auth';
import { Container } from './styles';

const SignIn: React.FC = () => {
  const { signInAuth } = useContext(AuthContext);

  const handleSignIn = (e: React.FormEvent): void => {
    e.preventDefault();
    signInAuth();
  };

  return (
    <Container>
      <form onSubmit={handleSignIn}>
        <input type="email" id="email" placeholder="Digite seu e-mail" />
        <input type="password" id="password" placeholder="Digite sua senha" />
        <button type="submit">Login</button>
      </form>
    </Container>
  );
};

export default SignIn;
