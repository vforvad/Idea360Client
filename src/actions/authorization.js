import axios from 'utils/axios';

export const signUp = (user) => {
  // return (dispatch) => {
    console.log(...user)
    axios.post('/registrations', { ...user })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  // };
}
