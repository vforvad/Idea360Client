import axios from 'utils/axios';

export const signIn = (user) => {
  return (dispatch) => {
    axios.post('/sign_in', { ...user })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };
}
