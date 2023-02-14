import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

import { getAuth } from "firebase/auth";

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
getFirestore(firebaseApp);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(firebaseApp);
