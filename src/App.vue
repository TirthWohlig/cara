<template>
  <v-app>
    <div>
      <Header />
    </div>
    <router-view />
  </v-app>
</template>

<script>
import Header from "../src/components/Navbar.vue";

export default {
  name: "App",

  components: {
    Header,
  },

  data: () => ({}),
};
</script>
