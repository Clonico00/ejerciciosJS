<template>
  <div>
    <h1 class="titulo">
      Cursos de programaci&oacute;n
    </h1>
    <div v-if="!loaded" class="text-center">
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <div v-else>
      <div class="container">
        <div class="row">
          <div class="col-md-4" v-for="curso in cursos" :key="curso.nombre">
            <div class="card mb-4 shadow-sm curso-card" @click="mostrarCursoDetalle(curso)">
              <img :src="curso.imagen" alt="curso-icon" class="card-img-top curso-img">
              <div class="card-body bg-dark large d-flex flex-column justify-content-center align-items-center text-white">
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
                <button v-if="loged" class="btn btn-primary w-100 mt-3">Ap&uacute;ntate</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DetalleCurso :curso="cursoDetalle" v-if="cursoDetalle" @cerrar="cerrarDetalleCurso" />
    </div>
  </div>
</template>

<script>
import { onAuthStateChanged } from 'firebase/auth';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { auth, db } from '@/firebase.js';
import { ref } from 'vue';
import DetalleCurso from "@/components/detalleCurso.vue";

export default {
  components: {
    DetalleCurso
  },
  setup() {
    const cursos = ref([]);
    const loaded = ref(false);
    const loged = ref(false);
    const cursoDetalle = ref(null);

    onAuthStateChanged(auth, (user) => {
      loged.value = !!user;
    });

    const fetchData = async () => {
      const querySnapshot = await getDocs(query(collection(db, 'cursos'), where('tipo', '==', 'programacion')));
      cursos.value = querySnapshot.docs.map(doc => {
        const data = doc.data();
        return {
          nombre: data.nombre,
          descripcion: data.descripcion,
          duracion: data.duracion,
          imagen: data.imagen,
        }
      });
      loaded.value = true;
    };

    const mostrarCursoDetalle = (curso) => {
      cursoDetalle.value = curso;
    };

    const cerrarDetalleCurso = () => {
      cursoDetalle.value = null;
    };

    fetchData();

    return {
      cursos,
      loaded,
      loged,
      cursoDetalle,
      mostrarCursoDetalle,
      cerrarDetalleCurso
    };
  }
};
</script>
<style scoped>
.titulo {
  margin: 20px 0;
  text-align: center;
}

.container {
  max-width: 800px;
  margin: 0 auto;
}

.curso-card {
  cursor: pointer;
  transition: transform .3s;
}

.curso-card:hover {
  transform: translateY(-5px);
}

.curso-img {
  height: 100px;
  width: 100px;
  object-fit: contain;
  margin: 0 auto;
}

.curso-name {
  font-weight: bold;
  text-align: center;
}

.curso-descripcion {
  text-align: justify;
  font-size: 0.8rem;
}

.curso-duracion {
  text-align: center;
  margin-top: 20px;
}

@media (max-width: 767px) {
  .curso-card {
    margin-bottom: 30px;
  }
}
</style>
