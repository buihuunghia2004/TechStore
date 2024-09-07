import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8017', 
  headers: {
    'Content-Type': 'application/json',
  },
});

// Middleware để thêm token vào request nếu có
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); // Hoặc lấy từ nơi khác
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => Promise.reject(error));

api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem('token');
    }
    return Promise.reject(error);
  }
)
export default api;
