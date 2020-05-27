import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Router from './Router';
import SignIn from '../pages/SignIn';
import Home from '../pages/Home';
import Movie from '../pages/Movie';
// import { Container } from './styles';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movie/:id" component={Movie} />
        <Route path="/signin" component={SignIn} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
