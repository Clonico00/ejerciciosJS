import {initializeApp} from 'firebase/app'
import {getFirestore, collection} from 'firebase/firestore'
// ... other firebase imports

export const firebaseApp = initializeApp({

    apiKey: "AIzaSyAFXrfJQKsi3-zdpAmupPTC3xxCFIU8gXc",

    authDomain: "nodeproyect-9a449.firebaseapp.com",

    projectId: "nodeproyect-9a449",

    storageBucket: "nodeproyect-9a449.appspot.com",

    messagingSenderId: "74999020962",

    appId: "1:74999020962:web:f41df59b55c33adae486fb"

})

// used for the firestore refs
const db = getFirestore(firebaseApp)