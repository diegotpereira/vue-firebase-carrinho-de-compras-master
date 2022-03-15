const state = {
    mensagemGrupo: {
        messagemClasse: '',
        mensagem: '',
        timeoutEvent: null,
    }
}
const mutations = {
    'ADD_MESSAGE' (state, { mensagem, messagemClasse }) {
        state.mensagemGrupo = {
            messagemClasse,
            mensagem
        }
        if (state.timeoutEvent) {
            clearTimeout(state.timeoutEvent)
        }
        state.timeoutEvent = setTimeout(function() {
            state.mensagemGrupo = {
                messagemClasse: '',
                mensagem: ''
            }
        }, 5000)
    },
    'LIMPAR_MENSAGEM' (state) {
        state.mensagemGrupo = {

        }
    }
}
const actions = {
    addMensagem({ commit }, obj) {
        commit('ADD_MENSAGEM', obj)
    },
    limparMensagem({ commit }) {
        commit('LIMPAR_MENSAGEM')
    }
}
const getters = {
    mensagens: (state) => {
        return state.mensagemGrupo
    }
}


export default {
    state,
    mutations,
    actions,
    getters
}