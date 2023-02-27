<script>
// import TheWelcome from "../components/TheWelcome.vue";
import Portada from "../components/Portada/Portada.vue";
import Introduccion from "../components/Introduccion/Introduccion.vue";
import Sumario from "../components/Asignatura/Sumario.vue";
import Jornalizacion from "../components/Asignatura/Jornalizacion.vue";
import Calendarizacion from "../components/Asignatura/Calendarizacion.vue"
import Apuntes from "../components/Apuntes/Apuntes.vue"
import Investigaciones from "../components/Investigaciones/Investigaciones.vue"
import Teareas from "../components/Tareas/Tareas.vue"

export default {
  components: {
    Portada,
    Introduccion,
    Sumario,
    Jornalizacion,
    Calendarizacion,
    Apuntes,
    Investigaciones,
    Teareas
  },
};
</script>

<template>
  <Portada />
  <Introduccion />
  <Sumario />
  <Jornalizacion />
  <Calendarizacion />
  <Apuntes />
  <Investigaciones />
  <Teareas />

</template>
