import Vue from 'vue'
import Vuex from 'vuex'
import carrinho from './modules/Carrinho'
import produtos from './modules/produtos'
import auth from './modules/auth'
import mensagens from './modules/mensagens'
import * as actions from './actions'

Vue.use(Vuex)


export default new Vuex.Store({
    actions,
    modules: {
        auth,
        carrinho,
        produtos,
        mensagens
    }
})