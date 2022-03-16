import Cadastrar from './components/auth/Cadastrar.vue'
import Entrar from './components/auth/Entrar.vue'
import Loja from './components/Loja.vue'
import CarrinhoDeCompras from './components/CarrinhoDeCompras.vue'
import ProdutoDetalhes from './components/ProdutoDetalhes.vue'
export const routes = [

    {
        path: '/',
        component: Loja,
        name: 'paginaprincipal'
    },
    {
        path: '/produto/:id',
        component: ProdutoDetalhes,
        name: 'produto'
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
        component: CarrinhoDeCompras,
        name: 'carrinhoDeCompras'
    }
]