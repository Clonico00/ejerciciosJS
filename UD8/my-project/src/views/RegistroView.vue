/* eslint-disable */<script setup>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const auth = getAuth();
import {ref} from "vue";

var usuario = ref("");
var password = ref("");
function registrar() {
  createUserWithEmailAndPassword(auth, usuario.value, password.value)
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
      });}
</script>
<template>
  <div class="registro">
    Usuario: <input type="text" v-model="usuario" />
    <br />
    Password: <input type="password" v-model="password" />
    <br />
    <button @click="registrar">Registrar</button>
  </div>
</template>