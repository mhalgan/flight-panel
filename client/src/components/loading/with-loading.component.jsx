import React from "react";
import Loading from "./loading.component";

const WithLoading = WrappedComponent => ({ isFetching, ...otherProps }) => {
  return isFetching ? <Loading /> : <WrappedComponent {...otherProps} />;
};

export default WithLoading;
