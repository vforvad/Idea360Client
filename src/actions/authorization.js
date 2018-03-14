import axios from 'utils/axios';

import actionTypes from 'actionTypes';
import { setToken } from 'utils/token';

export const currentUser = () => {
  return (dispatch) => {
    axios.get('/users/current')
      .then(response => {
        dispatch({
          type: actionTypes.CURRENT_USER, payload: response.data.current_user
        });
      });
  }
};

export const signIn = (user) => {
  return (dispatch) => {
    axios.post('/authorizations', { ...user })
      .then(response => {
        setToken(response.data.token);
        dispatch(currentUser())
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const signUp = (user) => {
  // return (dispatch) => {
    axios.post('/registrations', { ...user })
      .then(response => {
        setToken(response.data.token);
      })
      .catch(error => {
        console.log(error);
      });
  // };
}
