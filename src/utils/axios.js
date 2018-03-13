import axios from 'axios';
import config from './environment';

const instance = axios.create({
  baseURL: config.baseURL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
});

export default instance;
