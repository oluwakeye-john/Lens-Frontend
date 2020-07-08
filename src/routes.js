import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "./components/navbar";
import Create from "./pages/create";
import Login from "./pages/login";
import Register from "./pages/register";
import Join from "./pages/join";
import Dashboard from "./pages/dashboard";
import Call from "./pages/call";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import GlobalStyles from "./styles/globalStyles";

const Routes = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/create" component={Create} />
        <Route exact path="/join" component={Join} />
        <Route exact path="/call" component={Call} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </ThemeProvider>
  );
};

export default Routes;
