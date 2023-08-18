import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { AuthContext } from './AuthContext'; // Import your authentication context

const PrivateRoute = ({ component: Component, requiredRoles, ...rest }) => {
  const { isAuthenticated, userType } = useContext(AuthContext);

  // Perform role-based authorization check
  const isAuthorized = requiredRoles.includes(userType);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated && isAuthorized ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
