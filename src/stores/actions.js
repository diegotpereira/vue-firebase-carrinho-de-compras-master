import { referencia, firebaseAuth } from "../config/firebaseConfig"

export const atualizarCarrinho = ({
    commit
}, { item, quantidade, isAdd }) => {

    commit('ATUALIZAR_CARRINHO', { item, quantidade, isAdd })
    if (isAdd) {
        let mensagem_obj = {
            message: `Add ${item.titulo} to cart successfully`,
            messageClass: 'success',

        }
        commit('ADD_MESSAGE', mensagem_obj)
    }
}

export const cadastrarSeuEmail = (_, { email, password }) => {
    return firebaseAuth().createUserWithEmailAndPassword(email, password)
}

export function entrarComEmail(_, { email, password }) {
    return firebaseAuth().signInWithEmailAndPassword(email, password)
}

export const sair = () => {
    return firebaseAuth().signOut()
}

export function buscarListaDeProdutos({ commit }) {

    return referencia.child("produtos").on('value', (produtos) => {
        commit('ATUALIZAR_PRODUTO_LISTA', produtos.val())
    })
}