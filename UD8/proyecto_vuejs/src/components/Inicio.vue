<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="container mx-auto my-5 py-4">
    <div class="jumbotron bg-transparent text-center">
      <h1 class="display-4 mb-4">Bienvenido a la aplicación de Cursos de Informática</h1>
      <p class="lead mb-5">Descubre nuestra amplia selección de cursos en línea diseñados y dirigidos por expertos en la materia.</p>
      <router-link to="/ofimatica" class="btn btn-primary btn-lg mr-2">Ver Cursos</router-link>
    </div>
  </div>
</template>


<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
