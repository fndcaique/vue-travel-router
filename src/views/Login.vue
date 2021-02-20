<template>
  <div>
    <h1>Login</h1>
    <form class="form" @submit="login">
      <label for="username">Username</label>
      <input v-model="username" type="text" name="username" class="input" />
      <label for="password">Password</label>
      <input v-model="password" type="password" class="input" />
      <button class="btn">Login</button>
    </form>
  </div>
</template>
<script>
import store from '@/store';

export default {
  data() {
    return {
      username: null,
      password: null,
    };
  },
  methods: {
    login(event) {
      event.preventDefault();
      store.user = this.username;
      const redirectPath = this.$route.query.redirect || '/';
      this.$router.push(redirectPath);
    },
  },
};
</script>
<style scoped>
.form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
}
</style>
