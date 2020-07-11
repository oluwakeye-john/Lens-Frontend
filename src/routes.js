import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "./components/navbar";
import Create from "./pages/create";
import Join from "./pages/join";
import Dashboard from "./pages/dashboard";
import Help from "./pages/help";
import Call from "./pages/call";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import GlobalStyles from "./styles/globalStyles";

import SocketIOClient from "socket.io-client";
import Preloader from "./components/preloader";

const socket = SocketIOClient("http://localhost:3001");

const Routes = () => {
  const [isPaired, setIsPaired] = useState(false);
  socket.on("paired", () => {
    setIsPaired(true);
  });
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar />
      {!isPaired ? (
        <Preloader />
      ) : (
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route
            exact
            path="/create"
            component={({ history }) => (
              <Create socket={socket} history={history} />
            )}
          />
          <Route
            exact
            path="/join/:id"
            component={({ history, match }) => (
              <Join socket={socket} history={history} match={match} />
            )}
          />
          <Route
            exact
            path="/join"
            component={({ history }) => (
              <Join socket={socket} history={history} />
            )}
          />
          <Route
            exact
            path="/call"
            component={({ history }) => (
              <Call socket={socket} history={history} />
            )}
          />
          <Route exact path="/help" component={Help} />
        </Switch>
      )}
    </ThemeProvider>
  );
};

export default Routes;
