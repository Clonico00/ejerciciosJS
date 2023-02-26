<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="header">
          <h1 class="title">Área privada</h1>
          <h3 class="subtitle">¡Bienvenido {{ nombreUsuario }}!</h3>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <div class="cursos">
          <section class="cursos-ofimatica">
            <Ofimatica></Ofimatica>
          </section>
          <section class="cursos-programacion">
            <Programacion></Programacion>
          </section>
          <section class="cursos-SO">
            <SO></SO>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase";
import { ref } from "vue";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";
import Ofimatica from "@/components/Ofimatica.vue";
import Programacion from "@/components/Programacion.vue";
import SO from "@/components/SO.vue";

export default {
  components: {
    Ofimatica,
    Programacion,
    SO,
  },
  setup() {
    let nombreUsuario = ref("");
    let cursos = ref([]);

    onAuthStateChanged(auth, (user) => {
      if (user) {
        nombreUsuario.value = user.email;
      }
    });

    const cargarCursos = async () => {
      const querySnapshot = await getDocs(collection(db, "cursos"));
      cursos.value = querySnapshot.docs.map((doc) => doc.data());
    };

    cargarCursos();

    return {
      nombreUsuario,
      cursos,
    };
  },
};
</script>

<style scoped>
.cursos {
  margin-bottom: 500px;
}
.header {
  text-align: center;
}

.title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.subtitle {
  font-size: 1.5rem;
  font-weight: normal;
}
</style>

