import React, { useContext } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Router from './Router';
import AuthContext from '../contexts/auth';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
// import { Container } from './styles';

const Routes: React.FC = () => {
  const { signed } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Switch>
        <Router path="/" exact isPrivate component={Home} />
        <Router path="/signin" exact component={SignIn} />
        <Router path="/signup" component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
