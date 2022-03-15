import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import { routes } from './routes'
import store from './stores/store';
import { firebaseListener } from './config/firebaseConfig';
import './assets/styles/app.scss'


Vue.use(VueRouter)

Vue.config.productionTip = false

firebaseListener(authStatusChange);

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


function authStatusChange(estaLogado, usuario) {
    if (store) {
        store.commit('AUTH_STATUS_CHANGE')
        if (usuario) {
            store.dispatch('getCarrinhoCompras', { uid: usuario.uid, atualCarrinho: store.getters.carrinhoItemLista })
        }
    }
}