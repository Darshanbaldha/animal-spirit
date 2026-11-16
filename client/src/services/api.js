import axios from 'axios';

// Development: Vite proxies /api to localhost:3001.
// Production: Express serves both the frontend and /api from the same origin.
const api = axios.create({
  baseURL: '/api',
  headers: { 'Content-Type': 'application/json' }
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('animalSpiritToken');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;
