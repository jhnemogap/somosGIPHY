import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HeaderLayout from "../pages/HeaderLayout/HeaderLayout";
import routes from "./routes";

const App = () => {
  return (
    <BrowserRouter>
      <HeaderLayout>
        <Switch>
          {routes.map((route) => (
            <Route key={route.path} {...route} />
          ))}
        </Switch>
      </HeaderLayout>
    </BrowserRouter>
  );
};

export default App;
