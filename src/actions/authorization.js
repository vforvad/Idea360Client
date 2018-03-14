import axios from '../utils/axios';

import actionTypes from '../actionTypes';
import { setToken } from '../utils/token';

export const currentUser = () => (dispatch) => {
  axios.get('/users/current')
    .then((response) => {
      dispatch({
        type: actionTypes.CURRENT_USER, payload: response.data.current_user,
      });
    });
};

export const signIn = user => (dispatch) => {
  axios.post('/authorizations', { ...user })
    .then((response) => {
      setToken(response.data.token);
      dispatch(currentUser());
    });
};

export const signUp = (user) => {
  // return (dispatch) => {
  axios.post('/registrations', { ...user })
    .then((response) => {
      setToken(response.data.token);
    });
  // };
};
