import axios from '../utils/axios';

import actionTypes from '../actionTypes';

export const currentUser = () => (dispatch) => {
  axios.get('/users/current')
    .then((response) => {
      dispatch({
        type: actionTypes.CURRENT_USER, payload: response.data.current_user,
      });
    });
};

export const signIn = user => dispatch => axios.post('/authorizations', { ...user })
  .then((response) => {
    dispatch({ type: actionTypes.SIGN_IN, payload: response.data.token });
    dispatch(currentUser());
  })
  .catch((error) => {
    dispatch({ type: actionTypes.SIGN_IN_ERRORS, payload: error.response.data });
  });

export const signUp = user => (dispatch) => {
  axios.post('/registrations', { ...user })
    .then((response) => {
      dispatch({ type: actionTypes.SIGN_UP, payload: response.data.token });
      dispatch(currentUser());
    })
    .catch((response) => {
      dispatch({
        type: actionTypes.SIGN_UP_ERRORS, payload: response.data.errors,
      });
    });
};
