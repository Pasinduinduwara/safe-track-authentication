// src/api/axiosConfig.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080', // Your Spring Boot backend URL
  withCredentials: true, // For sending cookies
  headers: {
    'Content-Type': 'application/json',
  }
});

// Add request interceptor for auth tokens if needed
api.interceptors.request.use(config => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;