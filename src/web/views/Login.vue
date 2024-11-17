
<template>
  <div class="login-container">
    <LoginForm @login="handleLogin" />
  </div>
</template>

<script setup>
import { useAuthStore } from '../../shared/stores/auth';
import LoginForm from '../../app/components/LoginForm.vue';

const authStore = useAuthStore();

const handleLogin = async (credentials) => {
  await authStore.authenticate(credentials.username, credentials.password);
};
</script>

<style>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f4f8;
}
</style>
    