import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'

import Inicio from "@/components/Inicio.vue";
import {auth} from "@/firebase";
import Ofimatica from "@/components/Ofimatica.vue";
import Programacion from "@/components/Programacion.vue";
import SO from "@/components/SO.vue";
import Registro from "@/components/Registro.vue";
import Admin from "@/components/Admin.vue";

import {createRouter, createWebHistory} from "vue-router";
import { onAuthStateChanged } from "firebase/auth";
let authState = false;

const routes = [
    {
        path: '/',
        name: 'Inicio',
        component: Inicio
    },
    {
        path: '/ofimatica',
        name: 'Ofimatica',
        component: Ofimatica
    },
    {
        path: '/programacion',
        name: 'Programacion',
        component: Programacion
    },
    {
        path: '/sos',
        name: 'SOs',
        component: SO
    },
    {
        path: '/registro',
        name: 'Registro',
        component: Registro
    },

    {
        path: '/admin',
        name: 'Administración',
        component: Admin,
        meta: {
            autenticado: true
        }
    }

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
        router.push('/admin')
    } else {
        // User is signed out
        authState = false;
        router.push('/')
    }
});
const app = createApp(App)
app.use(router)

app.mount('#app')