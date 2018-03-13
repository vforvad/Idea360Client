export const TOKEN_NAME = 'Authorization';

export const setToken = (token) => {
  localStorage.setItem(TOKEN_NAME, token);
};

export const getToken = () => {
  return localStorage.getItem(TOKEN_NAME);
};
