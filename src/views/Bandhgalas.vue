<template>

    <div>
      <Header />
      <v-row style="padding:4%">
        <v-col cols="12" md="3" v-for="items in bandhgalas" :key="items">
          <v-card class="mx-auto my-12" max-width="400">
            <v-img height="600px" :src="items.image"></v-img>
            <v-card-title>{{ items.title }}</v-card-title>
            <v-card-text>
              <v-row align="center" class="mx-0">
                <v-rating
                  :value="items.rating"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
                ></v-rating>
  
                <div class="grey--text mt-3">
                  {{ items.rating }} ({{ items.volume }})
                </div>
              </v-row>
  
              <div class="my-4 text-subtitle-1">
                ₹{{ items.price }} {{ items.from }}
              </div>
  
              <div>
                {{ items.description }}

  <div>
    <Header />
    <v-row>
      <v-col cols="12" md="3" v-for="items in bandhgalas" :key="items">
        <v-card class="mx-auto my-12" max-width="400">
          <v-img height="600px" :src="items.image"></v-img>
          <v-card-title>{{ items.title }}</v-card-title>
          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating
                :value="items.rating"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>

              <div class="grey--text mt-3">
                {{ items.rating }} ({{ items.volume }})

              </div>
            </v-row>

            <div class="my-4 text-subtitle-1">₹{{ items.price }}</div>

            <div>
              {{ items.description }}
            </div>
            <br />
            <div>Designed By : {{ items.designer }}</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <br />
    <Footer />
  </div>
</template>
  <style scoped>
.container1 {
  position: relative;
  text-align: center;
  color: white;
}
.centered {
  position: absolute;
  font-family: "Gill Sans", sans-serif;
  font-size: 50px;
  color: white;
  background-color: black;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
  
  <script>
import Header from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import axios from "axios";
export default {
  data() {
    return {
      bandhgalas: "",
    };
  },
  mounted() {
    axios.get("http://localhost:3000/bandhgalas").then((response) => {
      this.bandhgalas = response.data;
      console.log(this.bandhgalas);
    });
  },
  components: {
    Header,
    Footer,
  },
};
</script>
  