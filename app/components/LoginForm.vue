
<template>
  <form @submit.prevent="submitForm">
    <input v-model="username" placeholder="Username" required />
    <input v-model="password" type="password" placeholder="Password" required />
    <button type="submit">Login</button>
  </form>
</template>

<script setup>
import { ref } from 'vue';

const username = ref('');
const password = ref('');

const submitForm = () => {
  const credentials = { username: username.value, password: password.value };
  $emit('login', credentials);
};
</script>

<style>
form {
  display: flex;
  flex-direction: column;
  width: 300px;
}
input {
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
}
button {
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
}
</style>
    