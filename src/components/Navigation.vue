<template>
  <nav id="nav">
    <p class="logo">The Vue School Travel App</p>
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
        }">{{destination.name}}</router-link>
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

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0 10px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.nav-links {
  display: flex;
}

.link {
  padding-right: 20px;
  list-style: none;
}

.logo {
  font-size: 20px;
  color: #42b983;
  font-weight: bold;
}
</style>
