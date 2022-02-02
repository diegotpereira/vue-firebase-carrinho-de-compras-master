import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import store from './stores/store';

import './assets/styles/app.scss'
import { routes } from './routes'

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes 
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})
// .$mount('#app')
