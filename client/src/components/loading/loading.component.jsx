import React from "react";
import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'

const Loading = () => (
  <Backdrop open={true}>
    <CircularProgress color="inherit" />
  </Backdrop>
);

export default Loading;
