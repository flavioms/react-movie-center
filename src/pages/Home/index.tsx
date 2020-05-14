import React, { useContext } from 'react';
import AuthContext from '../../contexts/auth';

import { Container } from './styles';

const Home: React.FC = () => {
  const { signOutAuth } = useContext(AuthContext);
  return (
    <Container>
      <button type="button" onClick={() => signOutAuth()}>
        Sair
      </button>
    </Container>
  );
};

export default Home;
