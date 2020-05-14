import React from 'react';
import { AuthProvider } from './contexts/auth';

import Routes from './routes';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <GlobalStyle />
      <Routes />
    </AuthProvider>
  );
};

export default App;
