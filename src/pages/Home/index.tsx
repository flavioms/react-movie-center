import React, { useContext } from 'react';
import AuthContext from '../../contexts/auth';
import Header from '../../components/Header';
import { Container } from './styles';

const Home: React.FC = () => {
  const { signOutAuth } = useContext(AuthContext);
  return (
    <Container>
      <Header />
      {/* <button type="button" onClick={() => signOutAuth()}>
        Sair
      </button> */}
    </Container>
  );
};

export default Home;
