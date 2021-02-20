<template>
  <nav class="nav">
    <router-link to="/" class="logo">
      The Vue School Travel App
    </router-link>
    <ul class="nav-links">
      <li class="link">
        <router-link to="/">Home</router-link> |
      </li>
      <li
        class="link"
        v-for="destination in destinations"
        :key="destination.name"
      >
        <router-link :to="{
          name: 'DestinationDetails',
          params: {
            slug: destination.slug
          }
        }"
        >
          {{ destination.name }}
        </router-link>
      </li>
      <li class="link">
        <router-link to="/user">Dashboard</router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
import store from '@/store';

export default {
  data() {
    return {
      destinations: store.destinations,
    };
  },
};
</script>
<style scoped>

.nav {
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  background-color:white;
  border-bottom: 1px solid grey;
  /* padding: 20px; */
  margin-bottom: 10px;
  z-index: 1;
}

.nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0 10px;
}

.nav a.router-link-exact-active {
  color: #42b983;
}

.nav-links {
  display: flex;
}

.link {
  padding-right: 20px;
  list-style: none;
}

a.logo {
  color: #42b983;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
}
</style>
