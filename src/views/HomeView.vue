<template>
  <div>
    <div>
      <img height="640px" style="width: 100%" src="../assets/banner.png" />
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
            <v-row>
              <v-col cols="12" md="3">
                <img
                  width="100%"
                  height="auto"
                  src="https://palettier-retail-private-limited.imgix.net/642eff6c288a035de205ea25.png?auto=compress&w=350&h=350&lossless=false&fm=webp&q=80"
                  alt=""
                />
              </v-col>
              <v-col cols="12" md="3">
                <img
                  width="100%"
                  height="auto"
                  src="../assets/four.png"
                  alt=""
                />
              </v-col>
              <v-col cols="12" md="3">
                <img
                  width="100%"
                  height="auto"
                  src="../assets/two.png"
                  alt=""
                />
              </v-col>
              <v-col cols="12" md="3">
                <img
                  width="100%"
                  height="auto"
                  src="../assets/two.png"
                  alt=""
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="3">
                <img
                  width="100%"
                  height="auto"
                  src="../assets/five.png"
                  alt=""
                />
              </v-col>
              <v-col cols="12" md="3">
                <img
                  width="100%"
                  height="auto"
                  src="../assets/four.png"
                  alt=""
                />
              </v-col>
              <v-col cols="12" md="3">
                <img
                  width="100%"
                  height="auto"
                  src="../assets/two.png"
                  alt=""
                />
              </v-col>
            </v-row>
          </v-container>
        </v-tab-item>
        <v-tab-item> 2 </v-tab-item>
      </v-tabs>
    </div>
    <br />
    <v-row style="background-color: #eee !important; padding: 3%">
      <v-col cols="12" md="4">
        <img height="50px" src="../assets/logo.png" />
      </v-col>
      <v-col cols="12" md="4">
        <v-column>
          <v-col cols="4" md="12">
            <div>
              <div><a href="/shop">Shop</a></div>
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
<script>
export default {
  data() {
    return {};
  },
};
</script>
