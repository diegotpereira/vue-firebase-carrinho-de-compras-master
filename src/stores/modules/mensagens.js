const state = {
    mensagemGrupo: {
        mensagemClasse: '',
        mensagem: '',
        timeoutEvent: null,
    }
}
const mutations = {
    'ADD_MENSAGEM' (state, { mensagem, mensagemClasse }) {
        state.mensagemGrupo = {
            mensagemClasse,
            mensagem
        }
        if (state.timeoutEvent) {
            clearTimeout(state.timeoutEvent)
        }
        state.timeoutEvent = setTimeout(function() {
            state.mensagemGrupo = {
                mensagemClasse: '',
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