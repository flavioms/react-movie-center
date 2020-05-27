import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Route from './Router';
import SignIn from '../pages/SignIn';
import Home from '../pages/Home';
import Movie from '../pages/Movie';
// import { Container } from './styles';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} isPrivate />
        <Route path="/movie/:id" component={Movie} isPrivate />
        <Route path="/signin" component={SignIn} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
