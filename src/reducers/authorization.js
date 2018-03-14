import actionTypes from '../actionTypes';

const initialState = {
  signInErrors: {},
  signUpErrors: {},
  currentUser: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGN_IN_ERRORS:
      return {
        ...state,
        signInErrors: action.payload,
      };
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
