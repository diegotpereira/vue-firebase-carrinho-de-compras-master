import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import './assets/styles/app.scss'

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
// .$mount('#app')
