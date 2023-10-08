// api.js

import axios from 'axios';
import jwtDecode from 'jsonwebtoken'; // Import the jwtDecode function from the jsonwebtoken library

const api = axios.create({
  baseURL: '/api', // Your backend API base URL
});

export const setAuthToken = (token) => {
  if (token) {
    // Set the JWT token in the request headers
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    // Remove the token from headers if it's not provided
    delete api.defaults.headers.common['Authorization'];
  }
};

export default api;
