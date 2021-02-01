import axios from 'axios';

// const { REACT_APP_PUBLIC_URL } = process.env;
const api = axios.create({
  // baseURL: REACT_APP_PUBLIC_URL,
  baseURL: 'https://cartas-jogo-beta-server.web.app/',
});

export { api };

export * from './cartas';
