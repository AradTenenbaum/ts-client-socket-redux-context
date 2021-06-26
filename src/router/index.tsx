import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import AppBarMenu from "../components/layout/AppBarMenu/AppBarMenu";
import ProtectedRoute from "./ProtectedRoute";
import routes from "./routes";

function Routes() {
  return (
    <Router>
      <AppBarMenu/>
      <Switch>
        {routes.map((route, index) => (
          <ProtectedRoute
            key={index}
            component={route.component}
            exact
            path={route.exactPath}
          />
        ))}
      </Switch>
    </Router>
  );
}

export default Routes;
