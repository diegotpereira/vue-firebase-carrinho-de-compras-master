import { firebaseAuth } from "../../config/firebaseConfig"

const state = {
    isLoggedIn: firebaseAuth().currentUser != null,
    usuario: firebaseAuth().currentUser
}

const mutations = {
    'MUDANÇA_DE_STATUS_DE_AUTH' (state) {
        state.isLoggedIn = firebaseAuth.currentUser != null
        state.usuario = firebaseAuth.currentUser
    }
}

const actions = {

}

const getters = {
    isLoggedIn: (state) => {
        return state.isLoggedIn
    },
    AtualUsuario: (state) => {
        if(state && state.usuario) {
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