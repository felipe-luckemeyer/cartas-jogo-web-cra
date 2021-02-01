import axios from 'axios';

const { REACT_APP_PUBLIC_URL } = process.env;

const api = axios.create({
  baseURL: REACT_APP_PUBLIC_URL,
});

export { api };

export * from './cartas';
