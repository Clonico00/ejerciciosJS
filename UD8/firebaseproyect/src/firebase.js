import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage";


export const firebaseApp = initializeApp({
    apiKey: "AIzaSyBufkkU3tDpw6SIEM3dhUCfYTVPPqBpgho",

    authDomain: "autenticacion-b86ba.firebaseapp.com",

    projectId: "autenticacion-b86ba",

    storageBucket: "autenticacion-b86ba.appspot.com",

    messagingSenderId: "15650290708",

    appId: "1:15650290708:web:d00f7557722066bdad7b01"
});
export const auth = getAuth(firebaseApp);
export const storage = getStorage(firebaseApp);

