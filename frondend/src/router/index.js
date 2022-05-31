import VueRouter from 'vue-router';
import Home from '../pages/index';
import Register from '../pages/user/Register';
import Login from '../pages/user/Login';
import Dashboard from '../pages/user/Dashboard';
import Users from '../pages/vuex_example/Users';
import AddUser from '../pages/vuex_example/AddUser';

// Routes
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      auth: undefined
    }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: {
      auth: false
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      auth: false
    }
  },
  // USER ROUTES
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: {
      auth: true
    }
    // meta: { requiresAuth: true }  // add this
  },
  {
    path: '/users',
    name: 'users',
    component: Users,
    meta: {
      auth: true
    }
  },
  {
    path: '/add-user',
    name: 'add_user',
    component: AddUser,
    meta: {
      auth: true
    }
  }
]
const router = new VueRouter({
  history: true,
  mode: 'history',
  routes,
})
export default router


// router.beforeEach((to, from, next) => {

//   // check if the route requires authentication and user is not logged in
//   if (to.matched.some(route => route.meta.requiresAuth) && !store.state.isLoggedIn) {
//       // redirect to login page
//       next({ name: 'login' })
//       return
//   }

//   // if logged in redirect to dashboard
//   if(to.path === '/login' && store.state.isLoggedIn) {
//       next({ name: 'dashboard' })
//       return
//   }

//   next()
// })