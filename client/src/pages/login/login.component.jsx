import React, { useEffect } from "react";
import { connect } from "react-redux";
import { authStart } from "../../redux/auth/auth.actions";
import { createStructuredSelector } from "reselect";
import { selectAuthToken } from "../../redux/auth/auth.selectors";
import { Redirect } from "react-router-dom";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";

const LoginPage = ({ token, authStart }) => {
  useEffect(() => {
    authStart();
  }, [authStart]);

  return (
    <Backdrop open={true}>
      <CircularProgress color="inherit" />
      {token ? <Redirect to="/" /> : null}
    </Backdrop>
  );
};

const mapStateToProps = createStructuredSelector({
  token: selectAuthToken
});

const mapDispatchToProps = dispatch => ({
  authStart: () => dispatch(authStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
