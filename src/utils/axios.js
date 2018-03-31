import axios from 'axios';
import config from './environment';

import { getToken, TOKEN_NAME } from './token';

const instance = axios.create({
  baseURL: config.baseURL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

instance.interceptors.request.use((req) => {
  const token = getToken();

  if (token) {
    req.headers[TOKEN_NAME] = token;
  }

  return req;
});

export default instance;
