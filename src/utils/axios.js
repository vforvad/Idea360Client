import axios from 'axios';
import config from './environment';

import { getToken, TOKEN_NAME } from './token';

const instance = axios.create({
  baseURL: config.baseURL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
});

axios.interceptors.request.use((config) => {
  const token = getToken();

  if (token) {
    config.headers[TOKEN_NAME] = token;
  }
  
  return config;
});

export default instance;
