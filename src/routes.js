import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/home";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "./components/navbar";
import Create from "./components/create";
import Login from "./components/login";
import Register from "./components/register";
import Join from "./components/join";

const Routes = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/create" component={Create} />
        <Route exact path="/join" component={Join} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </>
  );
};

export default Routes;
