<script>
export default {
  props: {
    curso: {
      type: Object,
      required: true
    }
  }
};
</script>
<template>
  <div class="modal-overlay" @click="$emit('cerrar')">
    <div class="modal-container bg-dark" @click.stop>
      <button type="button" class="btn-close" @click="$emit('cerrar')" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
      <br>
      <div class="curso-detalle ">
        <div class="curso-imagen">
          <img :src="curso.imagen" alt="curso-icon" class="img-fluid">
        </div>
        <div class="curso-informacion">
          <h2 class="curso-nombre">{{ curso.nombre }}</h2>
          <p class="curso-descripcion">{{ curso.descripcion }}</p>
          <p class="curso-duracion">
            Duración: <b>{{ curso.duracion }}</b>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.btn-close {
  position: absolute;
  top: 0;
  right: 0;
  font-size: 1.5rem;
  font-weight: bold;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  opacity: 1;
  padding: 0.5rem 0.7rem;
  background-color: transparent;
  border: none;
}

.btn-close:focus, .btn-close:hover {
  color: #000;
  text-decoration: none;
  background-color: rgba(0, 0, 0, 0.1);
  outline: none;
}

.curso-detalle {
  display: flex;
  flex-direction: row;
}

.curso-imagen {
  width: 300px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.curso-imagen img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.curso-informacion {
  margin-left: 2rem;
}

.curso-nombre {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.curso-descripcion {
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.curso-duracion {
  font-size: 1.2rem;
}
</style>
