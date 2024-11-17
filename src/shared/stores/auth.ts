
import { defineStore } from 'pinia';
import { login } from '../services/api';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    isAuthenticated: false,
  }),
  actions: {
    async authenticate(username: string, password: string) {
      try {
        const user = await login(username, password);
        this.user = user;
        this.isAuthenticated = true;
      } catch (error) {
        console.error('Authentication failed:', error);
      }
    },
  },
});
    