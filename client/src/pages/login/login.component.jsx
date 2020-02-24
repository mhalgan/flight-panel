import React, { useEffect } from "react";
import { connect } from "react-redux";
import { authStart } from "../../redux/auth/auth.actions";
import { createStructuredSelector } from "reselect";
import { selectAuthToken } from "../../redux/auth/auth.selectors";
import { Redirect } from "react-router-dom";
import Loading from "../../components/loading/loading.component";
const LoginPage = ({ token, authStart }) => {
  useEffect(() => {
    authStart();
  }, [authStart]);

  return (
    <div>
      <Loading />
      {token ? <Redirect to="/" /> : null}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  token: selectAuthToken
});

const mapDispatchToProps = dispatch => ({
  authStart: () => dispatch(authStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
