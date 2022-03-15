const state = {
    carrinhoItemLista: [

    ]
}
const mutations = {
    'ATUALIZAR_CARRINHO' (state, { item, quantidade, isAdd }) {
        const registro = state.carrinhoItemLista.find(element => element.id == item.id)

        if (registro) {
            if (isAdd) {
                registro.quantidade += quantidade
            } else {
                registro.quantidade = quantidade
            }
        } else {
            state.carrinhoItemLista.push({
                ...item,
                quantidade
            })
        }
    },
    'SET_CARRINHO' (state, produtoLista) {
        if (produtoLista) {
            state.carrinhoItemLista = produtoLista
        }
    },
    'REMOVER_CARRINHO_ITEM' (state, { item }) {
        const registro = state.carrinhoItemLista.find(element => element.id == item.id)
        state.carrinhoItemLista.splice(state.carrinhoItemLista.indexOf(registro), 1)
    }
}
const actions = {
    limparCarrinho: ({ commit }) => {
        commit('SET_CARRINHO', [])
    }
}
const getters = {
    carrinhoItemLista: (state) => {
        return state.carrinhoItemLista
    },
    carrinhoValor: (state) => {
        let res = 0
        state.carrinhoItemLista.map(item => {
            res += item.preco * item.quantidade
        })
        return res
    }
}
export default {
    state,
    mutations,
    actions,
    getters
}