import React, { useContext } from 'react';
import AuthContext from '../../contexts/auth';
import Header from '../../components/Header';
import SlideShow from '../../components/SlideShow';
import { Container } from './styles';

const Home: React.FC = () => {
  const { signOutAuth } = useContext(AuthContext);
  return (
    <Container>
      <Header />
      <SlideShow />
      {/* <button type="button" onClick={() => signOutAuth()}>
        Sair
      </button> */}
    </Container>
  );
};

export default Home;
