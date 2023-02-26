<template>
  <div>
    <h2>{{ nombreCurso }}</h2>
    <p>{{ descripcionCurso }}</p>
    <p>Duración: {{ duracionCurso }}</p>
    <img :src="'/src/media/'+imagenCurso" alt="curso">
  </div>
</template>

<script setup>
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { ref, watchEffect } from "vue";

let nombreCurso = props.nombreCurso;
let descripcionCurso = ref("");
let duracionCurso = ref("");
let imagenCurso = ref("");

watchEffect(async () => {
  const querySnapshot = await getDoc(doc(collection(db, "cursos"), "curso1"));
  const cursoData = querySnapshot.data();

  if (cursoData) {
    descripcionCurso.value = cursoData.descripcion;
    duracionCurso.value = cursoData.duracion;
    imagenCurso.value = cursoData.imagen;
  }
});
</script>

<style scoped>
h2 {
  font-weight: bold;
  margin: 10px 0;
}

img {
  max-width: 100%;
  height: auto;
}
</style>
