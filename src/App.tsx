import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { AuthProvider } from './contexts/auth';

import Routes from './routes';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Provider store={store}>
        <GlobalStyle />
        <Routes />
      </Provider>
    </AuthProvider>
  );
};

export default App;
