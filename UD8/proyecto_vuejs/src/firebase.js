import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

export const firebaseApp = initializeApp({
    apiKey: "AIzaSyCLPDv7reBGLw4ii-dydjoMVXmkrHoxA2o",
    authDomain: "proyecto-vuejs-f67ca.firebaseapp.com",
    projectId: "proyecto-vuejs-f67ca",
    storageBucket: "proyecto-vuejs-f67ca.appspot.com",
    messagingSenderId: "664544384407",
    appId: "1:664544384407:web:d0f35382ceb9228526a0d2"
});

export const auth = getAuth(firebaseApp);
