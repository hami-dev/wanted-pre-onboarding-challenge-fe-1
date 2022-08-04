import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080',
});

export const Users = {
  checkLogin: (params) => api.get(`/users/login`, {params}),
  createUser: (Parameter) => api.post(`/users/create`, Parameter),
};
