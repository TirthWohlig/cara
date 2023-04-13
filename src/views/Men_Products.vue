<template>
  <div>
    <Header />
    <v-row>
      <v-col cols="12" md="4" v-for="items in product" :key="items">
        <v-card class="mx-auto my-12" max-width="374">
          <v-img height="550px" :src="items.image"></v-img>
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
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <br/>
    <v-row style="background-color: #eee !important; padding: 3%">
      <v-col cols="12" md="4">
        <img height="50px" src="../assets/logo.png" />
      </v-col>
      <v-col cols="12" md="4">
        <v-column>
          <v-col cols="4" md="12">
            <div>
              <div><a href="/shop">Products</a></div>
            </div>
          </v-col>
          <v-col cols="4" md="12">
            <div><a href="/about">About</a></div>
          </v-col>

          <v-col cols="4" md="12">
            <div><a href="/contact">Contact</a></div>
          </v-col>
        </v-column>
      </v-col>
      <v-col cols="12" md="4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15082.396696471516!2d72.8960068!3d19.0813529!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8d1dc2d4e93%3A0xaac7b2a8db110f47!2sWohlig%20Transformations%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1681299509635!5m2!1sen!2sin"
          width="400"
          height="300"
          style="border: 0"
          allowfullscreen="true"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </v-col>
    </v-row>
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
import axios from "axios";
export default {
  data() {
    return {
      product: "",
    };
  },
  mounted() {
    axios.get("http://localhost:3000/mensProducts").then((response) => {
      this.product = response.data;
      console.log(this.product);
    });
  },
  components: {
    Header,
  },
};
</script>
