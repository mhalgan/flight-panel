import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectAuthToken } from "./redux/auth/auth.selectors";

import FlightPanelPage from "./pages/flight-panel/flight-panel.component";
import LoginPage from "./pages/login/login.component";

import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

function App({ token }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container component="main">
        <Switch>
          <Route path="/login" component={LoginPage} />

          <Route
            path="/"
            render={() =>
              token ? <FlightPanelPage /> : <Redirect to="/login" />
            }
          />
        </Switch>
      </Container>
    </React.Fragment>
  );
}

const mapStateToProps = createStructuredSelector({
  token: selectAuthToken
});

export default connect(mapStateToProps)(App);
