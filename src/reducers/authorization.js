import actionTypes from '../actionTypes';
import { setToken } from '../utils/token';

const initialState = {
  signInErrors: {},
  signUpErrors: {},
  currentUser: null,
};

const successAuth = (state, action) => {
  setToken(action.payload);
  return {
    ...state,
    signInErrors: {},
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGN_IN:
      return successAuth(state, action);
    case actionTypes.SIGN_IN_ERRORS:
      return {
        ...state,
        signInErrors: action.payload,
      };
    case actionTypes.SIGN_UP:
      return successAuth(state, action);
    case actionTypes.SIGN_UP_ERRORS:
      return {
        ...state,
        signUpErrors: action.payload,
      };
    case actionTypes.CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
        signInErrors: {},
        signUpErrors: {},
      };
    default:
      return state;
  }
};

export default reducer;
