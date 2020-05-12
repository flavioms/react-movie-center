import React, { useContext, useEffect } from 'react';
import AuthContext from '../../contexts/auth';
import { Container } from './styles';

const SignIn: React.FC = () => {
  const { signed, signInAuth } = useContext(AuthContext);

  useEffect(() => {
    signInAuth();
  }, [signInAuth]);

  return (
    <Container>
      <form>
        {console.log(signed)}
        <input type="email" id="email" placeholder="Digite seu e-mail" />
        <input type="password" id="password" placeholder="Digite sua senha" />
        <button type="submit">Login</button>
      </form>
    </Container>
  );
};

export default SignIn;
