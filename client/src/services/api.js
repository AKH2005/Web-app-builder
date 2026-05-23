import axios from 'axios';
import Cookies from 'js-cookie';

const BASE_URL = 'https://web-app-builder-w0pr.onrender.com/api';

const getHeaders = () => {
  const token = Cookies.get('token');
  return token
    ? { Authorization: `Bearer ${token}` }
    : {};
};

const api = {
  get: async (url) => {
    return axios.get(`${BASE_URL}${url}`, {
      headers: getHeaders(),
    });
  },

  post: async (url, data) => {
    return axios.post(`${BASE_URL}${url}`, data, {
      headers: getHeaders(),
    });
  },

  put: async (url, data) => {
    return axios.put(`${BASE_URL}${url}`, data, {
      headers: getHeaders(),
    });
  },

  delete: async (url) => {
    return axios.delete(`${BASE_URL}${url}`, {
      headers: getHeaders(),
    });
  },
};

export default api;