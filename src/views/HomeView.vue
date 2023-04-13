<template>
  <div>
    <Header/>
    <div>
      <img height="640px" style="width: 100%" class="desktop" src="../assets/banner.png" />
      <img height="230px" style="width:100%" class="mobile" src="../assets/banner.png" />
    </div>
    <br />
    <div style="display: flex; justify-content: center">
      <!-- <img src="../assets/image.png" /> -->
      <img src="../assets/design.png" />
    </div>
    <br />
    <div class="categories">
      <div style="text-align: center">
        <h1>Categories</h1>
      </div>
      <v-tabs color="deep-purple accent-4" centered>
        <!-- <v-tab>Landscape</v-tab> -->
        <v-tab>Women</v-tab>
        <v-tab>Men</v-tab>

        <v-tab-item>
          <v-container>
            <v-row >
              <v-col v-for="womens in women" :key="womens" cols="12" md="3">
                <div class="container1">
                  <v-img width="100%" height="auto" :src="womens.image"></v-img>
                  <div class="centered">{{ womens.text }}</div>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-tab-item>
        <v-tab-item> 
              <v-container>
            <v-row >
              <v-col v-for="womens in men" :key="womens" cols="12" md="3">
                <div class="container1">
                  <v-img width="100%" height="auto" :src="womens.image"></v-img>
                  <div class="centered">{{ womens.text }}</div>
                </div>
              </v-col>
            </v-row>
          </v-container>
           </v-tab-item>
      </v-tabs>
    </div>
    <br />
    <Footer/>
  </div>
</template>
<script>
import Header from "../components/Navbar.vue"
import Footer from "../components/Footer.vue"
import axios from "axios";
export default {
  data() {
    return {
      women: "",
      men:""
    };
  },
  mounted() {
    axios.get("http://localhost:3000/womens").then((response) => {
      this.women = response.data;
      // console.log(this.women);
    });
      axios.get("http://localhost:3000/mens").then((response) => {
      this.men = response.data;
      // console.log(this.women);
    });
  },
  components: {
    Header,
    Footer,
  },
};
</script>
<style scoped>
@media only screen and (max-width: 767px) {
  .desktop {
    display: none;
  }
}
@media only screen and (min-width: 767px) {
  .mobile {
    display: none;
  }
}
</style>
