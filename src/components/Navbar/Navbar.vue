<script>
export default {
  props: {
    brandName: String,
  },
  data() {
    return {
      routes: [],
    };
  },
  created() {
    this.$router.options.routes.forEach((route) => {
      this.routes.push({
        name: route.name,
        path: route.path,
      });
    });
  },
};
</script>
<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-black fixed-top">
    <div class="container-xxl">
      <a href="#" class="navbar-brand"
        ><span class="text-info">Programacion</span> IV</a
      >
      <!-- Boton responsivo -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarS"
        aria-controls="navbarS"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarS">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 text-uppercase">
          <li class="nav-item" v-for="route in routes" :key="route">
            <router-link :to="route.path" class="nav-link">{{
              route.name
            }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
