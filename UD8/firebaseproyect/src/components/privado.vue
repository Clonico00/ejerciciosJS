<script setup>
import {onAuthStateChanged} from "firebase/auth";
import {ref as ref2, getDownloadURL, uploadBytes} from "firebase/storage";
import {auth, storage} from "@/firebase";
import {ref} from "vue";

let nombreUsuario = ref("");
let file = ref("");


onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    nombreUsuario.value = user.email;
  }
});

function cerrarSesion() {
  auth.signOut().then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
}

function subirArchivo() {
  const storageRef = ref2(storage, file.value.files[0].name);
  // 'file' comes from the Blob or File API
  uploadBytes(storageRef, file.value.files[0]).then((snapshot) => {
    console.log('Uploaded a blob or file!');
    getDownloadURL(storageRef)
        .then((url) => {
          console.log(url)
        })
        .catch((error) => {
          // Handle any errors
        });
  });
}


</script>
<template>
  <h1>Privado</h1>
  <p>Bienvenido {{ nombreUsuario }}</p>
  <button @click="cerrarSesion">Cerrar Sesion</button>
  <br>
  <input type="file" name="" ref="file" @change="subirArchivo">
</template>