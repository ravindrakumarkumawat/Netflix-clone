import firebase from 'firebase'
import firebaseConfig from './firebase.config'

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

const auth = firebase.auth()

const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }

export default db