import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/brazil',
    name: 'brazil',
    component: () => import(/* webpackChunkName: "brazil" */ '../views/Brazil.vue'),
  },
  {
    path: '/panama',
    name: 'panama',
    component: () => import(/* webpackChunkName: "panama" */ '../views/Panama.vue'),
  },
  {
    path: '/hawaii',
    name: 'hawaii',
    component: () => import(/* webpackChunkName: "hawaii" */ '../views/Hawaii.vue'),
  },
  {
    path: '/jamaica',
    name: 'jamaica',
    component: () => import(/* webpackChunkName: "jamaica" */ '../views/Jamaica.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
