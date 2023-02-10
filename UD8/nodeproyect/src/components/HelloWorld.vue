<script setup>

import {useCollection, useFirestore} from 'vuefire'
import {collection, addDoc, doc, deleteDoc} from 'firebase/firestore'

const db = useFirestore()
const noticias = useCollection(collection(db, 'noticias'))

function nuevaNoticia() {
  // Add a new document with a generated id.
  addDoc(collection(db, "noticias"), {
    titulo: "Tokyo un lugar singular",
    contenido: "Lorem ipsum Japan"
  });
}

function nuevaNoticiaParam(titulo,contenido) {
  addDoc(collection(db, "noticias"), {
    titulo: titulo,
    contenido: contenido
  });
}

function borraNoticia(id) {
  deleteDoc(doc(db, "noticias", id));
}

defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <ul>
      <li v-for="noticia in noticias" :key="noticia.id" @click="borraNoticia(noticia.id)">
        <span>{{ noticia.titulo }}</span>
      </li>
    </ul>
    <input v-model="message" placeholder="escriba el titulo de la noticia.."/>
    <input v-model="message2" placeholder="escriba el contenido de la noticia.."/>
    <button @click="nuevaNoticiaParam(message,message2)">Nueva noticia</button>
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
