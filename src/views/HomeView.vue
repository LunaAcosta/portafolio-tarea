<script>
// import TheWelcome from "../components/TheWelcome.vue";
import Portada from "../components/Portada/Portada.vue";
import Introduccion from "../components/Introduccion/Introduccion.vue";

export default {
  components: {
    Portada,
    Introduccion,
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
