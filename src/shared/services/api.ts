
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_ERPNEXT_URL || 'https://your-erpnext-instance.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const login = async (username: string, password: string) => {
  const { data } = await api.post('/api/method/login', { usr: username, pwd: password });
  return data;
};

export const fetchDoctype = async (doctype: string) => {
  const { data } = await api.get(`/api/resource/${doctype}`);
  return data;
};

export const createDoctype = async (doctype: string, payload: object) => {
  const { data } = await api.post(`/api/resource/${doctype}`, payload);
  return data;
};

export default api;
    