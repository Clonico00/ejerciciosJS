<script setup>
import {ref} from 'vue';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import {signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import "bootstrap-icons/font/bootstrap-icons.css";
import {auth} from "@/firebase";

let usuario = ref(""), password = ref("");
const provider = new GoogleAuthProvider();


function altaUsuario() {
  createUserWithEmailAndPassword(auth, usuario.value, password.value)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
      });
}

function loginUsuario() {
  signInWithEmailAndPassword(auth, usuario.value, password.value)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
      });
}

function loginGoogle() {
  signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}

</script>

<template>
  <div class="card p-4 bg-dark" style="border-radius: 25px;">
    <h1 class="text-center mb-4">Iniciar Sesión</h1>
    <form>
      <div class="form-group">
        <input type="text" class="form-control form-control-lg rounded-pill" v-model="usuario" placeholder="Usuario" id="usuario" name="usuario">
      </div>
      <div class="form-group">
        <input type="password" class="form-control form-control-lg rounded-pill" v-model="password" placeholder="Contraseña" id="password" name="password">
      </div>
      <div class="form-group">
        <button class="btn btn-primary btn-lg mr-2" @click.prevent="altaUsuario">Registrar</button>
        <button class="btn btn-secondary btn-lg mr-2" @click.prevent="loginUsuario">Iniciar Sesión</button>
        <button class="btn btn-danger btn-lg" @click.prevent="loginGoogle">Login Google</button>
      </div>

    </form>
  </div>
</template>


