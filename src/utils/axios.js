import axios from 'axios';
import config from './environment';

const instance = axios.create({
  baseURL: config.baseURL
});

export default instance;
