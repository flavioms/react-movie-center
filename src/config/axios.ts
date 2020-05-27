/* eslint-disable @typescript-eslint/camelcase */
import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  responseType: 'json',
});
