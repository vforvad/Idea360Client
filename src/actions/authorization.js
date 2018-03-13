import axios from 'utils/axios';

import { setToken } from 'utils/token';

export const currentUser = () => {
  axios.get('/users/current/')
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
};

export const signUp = (user) => {
  // return (dispatch) => {
    console.log(...user)
    axios.post('/registrations', { ...user })
      .then(response => {
        setToken(response.data.token);
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  // };
}
