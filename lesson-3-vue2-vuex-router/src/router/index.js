import Home from '../views/Home.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () =>
      import('../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

export default router
