<script setup>
/* eslint-disable-next-line no-unused-vars*/

import { createUserWithEmailAndPassword } from "firebase/auth";
import {ref} from "vue";
import {auth} from "../firebase.js";
var usuario = ref(''),contrasena = ref('');

function nuevoUsuario() {
  createUserWithEmailAndPassword(auth, usuario.value, contrasena.value)
      .then((userCredential) => {
        // Signed in
        // eslint-disable-next-line no-unused-vars
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        // eslint-disable-next-line no-unused-vars
        const errorCode = error.code;
        // eslint-disable-next-line no-unused-vars
        const errorMessage = error.message;
        // ..
      });

}
</script>
<template>
  <div class="registro">
    Usuario: <input type="text" name="" id="" v-model="usuario">
    <br>
    Password: <input type="text" name="" id="" v-model="contrasena">
    <button @click="nuevoUsuario()">Nuevo usuario</button>  </div>
</template>