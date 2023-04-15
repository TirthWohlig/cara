<template>
  <div>
    <Header />
    <v-container>
      <div class="top">Place Your Order</div>
      <div>
        <v-stepper alt-labels>
          <v-stepper-header>
            <v-stepper-step step="1"> Cart </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step step="2"> Sizing </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step step="3"> Address</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step step="4"> Summary </v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step step="5"> Payment </v-stepper-step>
          </v-stepper-header>
        </v-stepper>
      </div>
      <div>
        <v-row>
          <v-col cols="12" md="6">
            <v-card :loading="loading" class="mx-auto my-12" max-width="374">
              <v-img
                height="250"
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
              ></v-img>

              <v-card-title>Cafe Badilico</v-card-title>

              <v-card-text>
                <v-row align="center" class="mx-0">
                  <div class="grey--text ms-4">4.5 (413)</div>
                </v-row>

                <div class="my-4 text-subtitle-1">$ • Italian, Cafe</div>

                <div>
                  Small plates, salads & sandwiches - an intimate setting with
                  12 indoor seats plus patio seating.
                </div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card class="mx-auto my-12" max-width="344" outlined>
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="text-overline mb-4">Order Summary</div>
                  <v-list-item-title class="text-h5 mb-1">
                    Order Total              <v-spacer></v-spacer>         ₹105899
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-card>
            <div class="d-flex justify-center">
              <v-btn dark>Place Your Order</v-btn>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
    <!-- <Footer /> -->
  </div>
</template>
<style scoped>
.top {
  font-size: 30px;
  font-weight: 400;
  font-family: "Roboto";
}
</style>

<script>
import Header from "../components/Navbar.vue";
// import Footer from "../components/Footer.vue";
export default {
  data() {
    return {};
  },
  components: {
    Header,
    // Footer,
  },
};
</script>
