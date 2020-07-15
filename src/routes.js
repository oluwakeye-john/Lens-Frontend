import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import "@fortawesome/fontawesome-free/css/all.min.css";
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
import ScrollRestore from "./components/scrollRestore";
import Layout from "./layout";

const apiUrl = process.env.REACT_APP_API_URL;
console.log("API URL: ", apiUrl);
if (!apiUrl) {
  console.log("Error: API URL not found");
}
const socket = SocketIOClient(apiUrl);

const Routes = () => {
  const [isPaired, setIsPaired] = useState(false);
  socket.on("paired", () => {
    setIsPaired(true);
  });
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        {!isPaired ? (
          <Preloader />
        ) : (
          <Switch>
            <ScrollRestore>
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
            </ScrollRestore>
          </Switch>
        )}
      </Layout>
    </ThemeProvider>
  );
};

export default Routes;
