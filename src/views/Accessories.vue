<template>
  <div>
    <Header />
    <div style="text-align:center;margin-top:8%">
      <h1>
        Sorry, looks like we are currently unable to find anything that matches
        your criteria
      </h1>
    </div>
    <Footer class="footer" />
  </div>
</template>
 
<style scoped>
  .footer {
    position: fixed;
    bottom: 0;
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
  