const firebase = require('firebase').default
const config = require('./firebaseConfig.json')
const fb = firebase.initializeApp(config)

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// export utils/refs
export {
    db,
    auth,
    fb
}