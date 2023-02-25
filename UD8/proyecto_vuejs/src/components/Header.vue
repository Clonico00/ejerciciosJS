<script setup>

import {ref} from "vue";
import {
  onAuthStateChanged,
  signOut

} from "firebase/auth";
import {auth} from "@/firebase";

let usuarioAutenticado = ref("");

onAuthStateChanged(auth, (user) => {
  usuarioAutenticado.value = !!user;

});

function logOut() {
  signOut(auth).then(() => {
    console.log("Log out");
  }).catch((error) => {
    console.log(error);
  });
}

</script>
<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <a class="navbar-brand" href="#">CURSOS ONLINE</a>

      <ul class="navbar-nav mr-auto">
        <router-link to="/" tag="li" class="nav-item active">
          <a class="nav-link font-weight-bold">Inicio</a>
        </router-link>
        <router-link to="/ofimatica" tag="li" class="nav-item">
          <a class="nav-link font-weight-bold">Ofimatica</a>
        </router-link>
        <router-link to="/programacion" tag="li" class="nav-item">
          <a class="nav-link font-weight-bold">Programacion</a>
        </router-link>
        <router-link to="/sos" tag="li" class="nav-item">
          <a class="nav-link font-weight-bold">SO</a>
        </router-link>
        <router-link to="/admin" tag="li" class="nav-item" v-if="usuarioAutenticado">
          <a class="nav-link font-weight-bold">Zona Admin</a>
        </router-link>
      </ul>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <router-link to="/registro" tag="li" class="nav-item" v-if="!usuarioAutenticado">
            <fieldset class="btn btn-secondary">Iniciar Sesion</fieldset>
          </router-link>
          <router-link to="/registro" tag="li" class="nav-item" v-else @click="logOut">
            <fieldset class="btn btn-secondary">Cerrar Sesi&oacute;n</fieldset>
          </router-link>
        </ul>
      </div>
    </nav>
  </header>
  <main class="container mt-5">
    <router-view></router-view>
  </main>
</template>

<style>
.navbar-nav {
  margin-left: 20px;
}

.navbar-brand {
  margin-right: 20px;
}

.navbar-nav.mr-auto .nav-item {
  margin-right: 20px;
}
</style>
