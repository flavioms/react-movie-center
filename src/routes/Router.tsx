import React, { useContext } from 'react';
import { Route, RouteProps, Redirect } from 'react-router-dom';
import AuthContext from '../contexts/auth';

// import { Container } from './styles';

interface CustomRouteProps extends RouteProps {
  isPrivate?: boolean;
}

const RouteWrapper: React.FC<CustomRouteProps> = ({
  isPrivate = false,
  ...rest
}) => {
  const { signed } = useContext(AuthContext);

  if (!signed && isPrivate) {
    return <Redirect to="/signin" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/" />;
  }

  return <Route {...rest} />;
};

export default RouteWrapper;
