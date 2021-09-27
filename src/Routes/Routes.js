import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Economizator from "../Pages/Economizator";

const Router = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/economizator" exact component={Economizator} />

      <Redirect path="*" to="/" />
    </Switch>
  );
};

export default Router;
