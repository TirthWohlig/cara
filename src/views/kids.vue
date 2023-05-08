<template>
  <div>
    <Header />
    <br />
    <v-tabs color="deep-purple accent-4" centered>
      <!-- <v-tab>Landscape</v-tab> -->
      <v-tab>Boys</v-tab>
      <v-tab>Girls</v-tab>
      <v-tab-item>
        <v-container>
          <v-row>
            <v-col cols="12" md="3" v-for="items in sari" :key="items">
              <v-card class="mx-auto my-12" max-width="200">
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
                 
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-tab-item>
      <v-tab-item>
        <v-container>
          <v-row>
            <v-col cols="12" md="3" v-for="items in sari" :key="items">
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
               
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-tab-item>
    </v-tabs>
    <br />
    <Footer />
  </div>
</template>
    <style scoped>
</style>
    
    <script>
import Header from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>
    