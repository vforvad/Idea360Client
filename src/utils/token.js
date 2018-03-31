export const TOKEN_NAME = 'Authorization';
const localToken = 'Idea360token';

export const setToken = (token) => {
  localStorage.setItem(localToken, token);
};

export const getToken = () => localStorage.getItem(localToken);
