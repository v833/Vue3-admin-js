import {
  createRouter,
  createWebHashHistory
} from "vue-router";

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/account/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/account/Register.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router