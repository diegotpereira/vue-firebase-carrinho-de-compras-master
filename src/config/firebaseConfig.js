import firebase from "firebase"

const config = {
    apiKey: "AIzaSyB4WJ_nspMyFA_zsSZ9ky_SoQiS2QOp70I",
    authDomain: "website-ecom-ff223.firebaseapp.com",
    databaseURL: "https://website-ecom-ff223-default-rtdb.firebaseio.com",
    projectId: "website-ecom-ff223",
    storageBucket: "website-ecom-ff223.appspot.com",
    messagingSenderId: "144186283636",
    appId: "1:144186283636:web:0a19ba77ac96142f9f6321",
    measurementId: "G-78NFGDSLPB"
}

firebase.initializeApp(config)


export const referencia = firebase.database().ref()
export const firebaseAuth = firebase.auth