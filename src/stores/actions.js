import { referencia, firebaseAuth } from "../config/firebaseConfig"

export const atualizarCarrinho = ({
    commit
}, { item, quantidade, isAdd }) => {

    commit('ATUALIZAR_CARRINHO', { item, quantidade, isAdd })
    if (isAdd) {
        let mensagem_obj = {
            mensagem: `Adicionado ${item.titulo} ao carrinho com sucesso`,
            messagemClasse: 'success',
            autoClose: true

        }
        commit('ADD_MESSAGE', mensagem_obj)
    }
}

export const cadastrarSeuEmail = (_, { email, password }) => {
    return firebaseAuth().createUserWithEmailAndPassword(email, password)
}

export const sair = () => {
    return firebaseAuth().signOut()
}

export function entrarComEmail(_, { email, password }) {
    return firebaseAuth().signInWithEmailAndPassword(email, password)
}


export function buscarListaDeProdutos({ commit }) {

    return referencia.child("produtos").on('value', (produtos) => {
        commit('ATUALIZAR_PRODUTO_LISTA', produtos.val())
    });
}
export function getCarrinhoCompras({ commit }, { uid, atualCarrinho }) {
    if (uid) {
        return referencia.child('carrinho/' + uid).once('value').then((carrinho) => {
            if (carrinho.val() && (!atualCarrinho || atualCarrinho.length == 0)) {
                commit('SET_CARRINHO', carrinho.val())
            }
        });
    }
}
export function salvarCarrinhoCompras(_, { uid, carrinhoItemLista }) {
    return referencia.child("carrinho/" + uid).set(carrinhoItemLista);
}
export function salvarNaTransacao(_, { uid, carrinhoItemLista }) {
    let novaTransacaoChave = referencia.child('transacoes').push().key;
    var novaTransacao = {}
    novaTransacao['/transacoes/' + uid + '/' + novaTransacaoChave] = carrinhoItemLista;

    return referencia.update(novaTransacao);
}