import React from 'react';

import { Container } from './styles';

const Login: React.FC = () => {
  return (
    <Container>
      <form>
        <input type="email" id="email" placeholder="Digite seu e-mail" />
        <input type="password" id="password" placeholder="Digite sua senha" />
        <button type="submit">Login</button>
      </form>
    </Container>
  );
};

export default Login;
