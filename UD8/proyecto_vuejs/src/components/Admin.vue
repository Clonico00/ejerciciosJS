<template>
  <div>
    <div class="curso-section">
      <h1 class="titulo">
        Cursos de ofim&aacute;tica
      </h1>
      <div v-if="!loaded">
        <div class="preload"></div>
      </div>
      <div v-else>
        <div class="container">
          <div class="row ">
            <div class="col-md-4" v-for="curso in cursos" :key="curso.nombre">
              <div class="card mb-4 shadow-sm curso-card" @click="showCourse(curso.nombre)">
                <img :src="curso.imagen" alt="curso-icon" class="card-img-top curso-img">
                <div class="card-body bg-dark">
                  <h2 class="card-title curso-name">
                    {{ curso.nombre }}
                  </h2>
                  <p class="card-text curso-descripcion">
                    {{ curso.descripcion }}
                  </p>
                  <p class="curso-duracion">
                    Duraci&oacute;n:
                    <b>
                      {{ curso.duracion }}
                    </b>
                  </p>
                  <button v-if="loged" class="btn btn-primary">Ap&uacute;ntate</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="curso-section">
      <h1 class="titulo">
        Cursos de dise&ntilde;o gr&aacute;fico
      </h1>
      <div v-if="!loaded">
        <div class="preload"></div>
      </div>
      <div v-else>
        <div class="container">
          <div class="row ">
            <div class="col-md-4" v-for="curso in cursos" :key="curso.nombre">
              <div class="card mb-4 shadow-sm curso-card" @click="showCourse(curso.nombre)">
                <img :src="curso.imagen" alt="curso-icon" class="card-img-top curso-img">
                <div class="card-body bg-dark">
                  <h2 class="card-title curso-name">
                    {{ curso.nombre }}
                  </h2>
                  <p class="card-text curso-descripcion">
                    {{ curso.descripcion }}
                  </p>
                  <p class="curso-duracion">
                    Duraci&oacute;n:
                    <b>
                      {{ curso.duracion }}
                    </b>
                  </p>
                  <button v-if="loged" class="btn btn-primary">Ap&uacute;ntate</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="curso-section">
      <h1 class="titulo">
        Cursos de programaci&oacute;n
      </h1>
      <div v-if="!loaded">
        <div class="preload"></div>
      </div>
      <div v-else>
        <div class="container">
          <div class="row ">
            <div class="col-md-4" v-for="curso in cursos" :key="curso.nombre">
              <div class="card mb-4 shadow-sm curso-card" @click="showCourse(curso.nombre)">
                <img :src="curso.imagen" alt="curso-icon" class="card-img-top curso-img">
                <div class="card-body bg-dark">
                  <h2 class="card-title curso-name">
                    {{ curso.nombre }}
                  </h2>
                  <p class="card-text curso-descripcion">
                    {{ curso.descripcion }}
                  </p>
                  <p class="curso-duracion">
                    Duraci&oacute;n:
                    <b>
                      {{ curso.duracion }}
                    </b>
                  </p>
                  <button v-if="loged" class="btn btn-primary">Ap&uacute;ntate</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script setup>
import { onMounted } from 'vue';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '@/firebase.js';

const ofimatica = [];
const programacion = [];
const so = [];

onMounted(async () => {
  const querySnapshot = await getDocs(query(collection(db, 'cursos')));
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    const curso = {
      nombre: data.nombre,
      descripcion: data.descripcion,
      duracion: data.duracion,
      imagen: data.imagen
    };
    switch (data.tipo) {
      case 'ofimatica':
        ofimatica.push(curso);
        break;
      case 'programacion':
        programacion.push(curso);
        break;
      case 'so':
        so.push(curso);
        break;
    }
  });
});

</script>

