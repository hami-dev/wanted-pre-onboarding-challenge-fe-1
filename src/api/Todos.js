import axios from 'axios';
import {Utils} from 'utils';

const TOKEN = Utils.getLocalStorage('token');

const api = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${TOKEN}`,
  },
});

export const Todos = {
  createTodo: (Parameter) => api.post(`/todos`, Parameter),
  getTodo: () => api.get(`/todos`),
  getTodoById: (id) => api.get(`todos/${id}`),
  updateTodo: (id, Parameter) => api.put(`todos/${id}`, Parameter),
};
