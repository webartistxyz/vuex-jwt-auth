import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'User',
    component: () => import('../components/Users')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router