import React, { useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AuthContext from '../contexts/auth';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
// import { Container } from './styles';

const Routes: React.FC = () => {
  const { signed } = useContext(AuthContext);
  return (
    <BrowserRouter>{signed ? <AppRoutes /> : <AuthRoutes />}</BrowserRouter>
  );
};

export default Routes;
