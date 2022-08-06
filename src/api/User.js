import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080',
});

export const Users = {
  checkLogin: (Parameter) => api.post(`/users/login`, Parameter),
  createUser: (Parameter) => api.post(`/users/create`, Parameter),
};
