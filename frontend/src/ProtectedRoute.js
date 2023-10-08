// ProtectedRoute.js

import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';

function ProtectedRoute({ component: Component, isAuthenticated, ...rest }) {
  useEffect(() => {
    // Check the isAuthenticated prop to determine whether the user is authenticated
    // You can also add additional logic here if needed
  }, [isAuthenticated]);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}

export default ProtectedRoute;
