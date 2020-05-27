import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Router from './Router';
import SignIn from '../pages/SignIn';
import Home from '../pages/Home';
import Movie from '../pages/Movie';
// import { Container } from './styles';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Router path="/" exact isPrivate component={Home} />
        <Router path="/movie/:id" exact isPrivate component={Movie} />
        <Router path="/signin" exact component={SignIn} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
