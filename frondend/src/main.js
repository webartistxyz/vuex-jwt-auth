import 'es6-promise/auto'
import axios from 'axios';
import VueAxios from 'vue-axios'
import Vue from 'vue';
import VueAuth from '@websanova/vue-auth'
import VueRouter from 'vue-router'
import App from './App.vue'
import auth from './auth'
import router from './router';
import store from './store';

Vue.router = router
Vue.use(VueRouter)

Vue.use(VueAxios, axios)

Vue.use(VueAuth, auth)

Vue.config.productionTip = false
axios.defaults.baseURL = "http://127.0.0.1:8000/api/"

new Vue({
  render: h => h(App),
  router,
  store: store,
}).$mount('#app')
