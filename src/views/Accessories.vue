<template>
  <div>
    <Header />
    <div class="container1">
      <h1 class="centered">
        Sorry, looks like we are currently unable to find anything that matches
        your criteria
      </h1>
    </div>
    <br />
    <Footer />
  </div>
</template>
 
<style scoped>
h1 {
  text-align: center;
}

.container1 {
  top: 50%;
}
</style>
  
  <script>
import Header from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
export default {
  data() {
    return {};
  },
  components: {
    Header,
    Footer,
  },
};
</script>
  