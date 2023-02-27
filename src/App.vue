<script>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar/Navbar.vue";
import Footer from "./components/Footer/Footer.vue";

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<template>
  <Navbar />
  <RouterView />
  <Footer />
</template>
