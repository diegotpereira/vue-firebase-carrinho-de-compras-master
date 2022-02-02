import { firebaseAuth } from "../config/firebaseConfig"

export const cadastrarSeuEmail = (_, { email, password }) => {
    return firebaseAuth().createUserWithEmailAndPassword(email, password)
}