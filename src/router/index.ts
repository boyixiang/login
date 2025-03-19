import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import index from "../views/index/index.vue";
import login from "../views/login/login.vue";
import page404 from "../views/error/404.vue";
import page500 from "../views/error/500.vue";
import error from "../views/error/other.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/index',
    name: 'index',
    component: index
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/page404',
    name: 'page404',
    component: page404
  },
  {
    path: '/page500',
    name: 'page500',
    component: page500
  },
  {
    path: '/error',
    name: 'error',
    component: error
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
