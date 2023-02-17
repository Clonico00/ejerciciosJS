import {createApp} from 'vue'
import App from './App.vue'

import './assets/main.css'
import HelloWorld from "@/components/HelloWorld.vue";
import TheWelcome from "@/components/TheWelcome.vue";
import Registro from "@/components/registro.vue";
import Privado from "@/components/privado.vue";

import {createRouter, createWebHistory} from "vue-router";
import { onAuthStateChanged } from "firebase/auth";
import {auth} from "@/firebase";

let authState = false;
const routes = [
    {
        path: '/',
        component: HelloWorld
    },
    {
        path: '/about',
        component: TheWelcome
    },
    {
        path: '/registro',
        component: Registro
    },
    {
        path: '/privado',
        component: Privado,
        beforeEnter: (to, from) => {
            // reject the navigation
            return authState
        },
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        authState = true;
    } else {
        // User is signed out
        authState = false;
        router.push('/')
    }
});

const app = createApp(App)
app.use(router)
app.mount('#app')