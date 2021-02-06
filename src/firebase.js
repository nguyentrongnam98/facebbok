// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyCBtNy9hh1v-TKUk-EVxyHQqeHsagFA3f0",
    authDomain: "facebook-clone-2aaaf.firebaseapp.com",
    projectId: "facebook-clone-2aaaf",
    storageBucket: "facebook-clone-2aaaf.appspot.com",
    messagingSenderId: "87032315629",
    appId: "1:87032315629:web:86e3d88192bfe6942d16e4",
    measurementId: "G-HH8CXPYQ79"
};
const firebaseapp = firebase.initializeApp(firebaseConfig)
const db = firebaseapp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider}
export default db;