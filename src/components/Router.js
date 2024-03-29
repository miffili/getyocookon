import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./Landing";
import App from "./App";

const Router = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path="/" component={Landing}/>
      <Route exact path="/home" component={App}/>
    </Switch>
  </BrowserRouter>
);

export default Router;
