import { firebaseAuth } from "../config/firebaseConfig"

export const cadastrarSeuEmail = (_, { email, password }) => {
    return firebaseAuth().createUserWithEmailAndPassword(email, password)
}

export function entrarComEmail(_, { email, password }) {
    return firebaseAuth().signInWithEmailAndPassword(email, password)
}

export const sair = () => {
    return firebaseAuth().signOut()
}