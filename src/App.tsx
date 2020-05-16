import React from 'react';
import { AuthProvider } from './contexts/auth';
import { MovieProvider } from './contexts/movie';

import Routes from './routes';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <MovieProvider>
        <GlobalStyle />
        <Routes />
      </MovieProvider>
    </AuthProvider>
  );
};

export default App;
