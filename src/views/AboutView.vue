<template>
  <div class="about">
    <Header/>
    <div class="container1">
      <img width="100%" height="640px" src="../assets/aboutnew.png" />
      <div class="centered">About</div>
    </div>
    <div>
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <!-- First section content -->
            <h2 class="font">Who we are</h2>
            <br />
            <p class="font">
              Rooted in fashion and technology, Palettier is a home for
              designers and their creations. Wherever you are across the globe,
              a few clicks lead you to our site, where our partner-designers'
              thoughtfully crafted creations meet your customisations
            </p>
            <br />
            <p class="font">
              Visualise, customise and shop on Palettier. Our platform brings
              you everything from classic must-haves to festive colours, cuts
              and embroidery within your purview. While you're here, you can
              browse, customise or use us as your go-to style guide. Before you
              know it, our platform becomes yours, and your choices come to
              life.
            </p>
          </v-col>
          <v-col cols="12" md="6">
            <!-- Second section content -->
            <img
              width="100%"
              height="350px"
              src="../assets/ref img.png"
              alt=""
            />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div>
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <img
              height="380px"
              src="../assets/girl.png"
              alt="Image description"
            />
          </v-col>
          <v-col cols="12" md="6">
            <h2 class="font">Why we started</h2>
            <br />
            <p class="font">
              Fashion speaks volumes to me, as it does to millions world-over,
              and as I delved deeper into this beautiful yet dynamic universe, I
              saw a gap. After months of research, development and obsessing
              over the solution to this problem, my team and I built Palettier.
              A solution and platform that simplifies the essence of
              customisation finding the perfect outfit should be fun, simple and
              hassle-free; customising the perfect one - even more so. That’s
              where Palettier comes in. Our platform lets you visualise what
              your ideal outfit looks like, choose from a range of distinct
              brands and enables our brands to cater to your specific needs.
            </p>
            <p class="font">
              Sincerely, <br />
              Ananya Daftary <br />
              Founder
            </p>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <v-row
      style="
        background-color: #eee !important;
        padding: 3%;
        height: 500px !important;
      "
    >
      <v-col cols="12" md="4">
        <img height="50px" src="../assets/logo.png" />
      </v-col>
      <v-col cols="12" md="4">
        <v-column>
          <v-col cols="4" md="12">
            <div>
              <div><a href="/ ">Home</a></div>
            </div>
          </v-col>
          <v-col cols="4" md="12">
            <div><a href="/shop">Products</a></div>
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

.font {
  font-family: "Roboto";
}
</style>

<script>
import Header from "../components/Navbar.vue";

export default {
  name: "App",

  components: {
    Header,
  },

  data: () => ({}),
};
</script>