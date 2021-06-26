import React from "react";
import { Redirect, Route } from "react-router";

const ProtectedRoute = ({ component, path, ...rest }) => {

  return (
    <Route
      {...rest}
      render={(props) =>
        (false) ? (
          path === "/template" ? (
            <Redirect to="/" />
          ) : (
            React.createElement(component, props)
          )
        ) : (
          React.createElement(component, props)
        )
      }
    />
  );
};

export default ProtectedRoute;
