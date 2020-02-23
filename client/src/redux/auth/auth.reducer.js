import AuthActionTypes from "./auth.types";

const INITIAL_STATE = {
  isRetrievingToken: false,
  token: null,
  errorMessage: null
};

const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthActionTypes.AUTH_START:
      return {
        ...state,
        isRetrievingToken: true
      };
    case AuthActionTypes.AUTH_SUCCESS:
      return {
        ...state,
        isRetrievingToken: false,
        token: action.payload,
        errorMessage: null
      };

    case AuthActionTypes.AUTH_FAILURE:
      return {
        ...state,
        isRetrievingToken: false,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export default AuthReducer;
