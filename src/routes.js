import Cadastrar from './components/auth/Cadastrar.vue'
import Entrar from './components/auth/Entrar.vue'
import Loja from './components/Loja.vue'
import CarrinhoCompras from './components/CarrinhoDeCompras.vue'

export const routes = [

    {
        path: '/',
        component: Loja,
        name: 'paginaprincipal'
    },

    {
        path: '/cadastrar',
        component: Cadastrar,
        name: 'cadastrar'
    },
    {
        path: '/entrar',
        component: Entrar,
        name: 'entrar'
    },
    {
        path: '/carrinho',
        component: CarrinhoCompras,
        name: 'carrinhoCompras'
    }
]