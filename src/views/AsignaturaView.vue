<script>
import Sumario from "../components/Asignatura/Sumario.vue";
import Calendarizacion from "../components/Asignatura/Calendarizacion.vue";
import Jornalizacion from "../components/Asignatura/Jornalizacion.vue";

export default {
  name: "AsignaturaView",
  components: {
    Sumario,
    Calendarizacion,
    Jornalizacion,
  },
};
</script>
<template>
  <Sumario />
  <Jornalizacion />
  <Calendarizacion />
</template>
