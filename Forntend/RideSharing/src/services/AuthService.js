import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8081';

const login = (role, email, password) => {
  const data = {
    email: email.trim(),
    password: password.trim(),
    role: role
  };
  console.log("Sending:", data); // Debug log
  return axios.post(`${API_URL}/api/users/login`, data, {
    headers: { 'Content-Type': 'application/json' }
  });
};

export default {
  login
};