import { firebaseAuth } from "../../config/firebaseConfig"

const state = {
    estaLogado: firebaseAuth().currentUser != null,
    usuario: firebaseAuth().currentUser
}

const mutations = {
    'AUTH_STATUS_CHANGE' (state) {
        state.estaLogado = firebaseAuth().currentUser != null
        state.usuario = firebaseAuth().currentUser
    }
}

const actions = {

}

const getters = {
    estaLogado: (state) => {
        return state.estaLogado
    },
    atualUsuario: (state) => {
        if (state && state.usuario) {
            return {
                email: state.usuario.email,
                emailVerified: state.usuario.emailVerified,
                uid: state.usuario.uid
            }
        } else {
            return {}
        }
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}