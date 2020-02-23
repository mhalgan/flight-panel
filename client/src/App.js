import React, { useEffect } from "react";
import { connect } from "react-redux";
import { authStart } from "./redux/auth/auth.actions";
import { createStructuredSelector } from "reselect";
import { selectAuthToken } from "./redux/auth/auth.selectors";
import FlightPanel from "./pages/flight-panel/flight-panel.component";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

function App({ token, authStart }) {
  useEffect();

  return (
    <div>
      <CssBaseline />
      <Container>
        <FlightPanel />
      </Container>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  token: selectAuthToken
});
const mapDispatchToProps = dispatch => ({
  authStart: () => dispatch(authStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
