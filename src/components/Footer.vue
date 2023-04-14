<template>
  <div>
    <div style="padding: 3%; background-color: #eee !important">
      <v-row>
        <v-col class="d-flex justify-center" cols="12" md="3">
          <img height="60px" src="../assets/logo.png" />
        </v-col>
        <v-col cols="12" md="3">
          <div>SUPPORT</div>
          <br />
          <div>Whatsapp/Call: +918655915825</div>
          <br />
          <div>Monday to Saturday, 10am -7pm</div>
          <br />
          <div>customercare@cara.com</div>
        </v-col>

        <v-col cols="12" md="3">
          <div><router-link to="/">Home</router-link></div>
          <br />
          <div><router-link to="/about">About</router-link></div>
          <br />
          <div><router-link to="/contact">Contact</router-link></div>
        </v-col>

        <v-col cols="12" md="3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15082.396696471516!2d72.8960068!3d19.0813529!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8d1dc2d4e93%3A0xaac7b2a8db110f47!2sWohlig%20Transformations%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1681299509635!5m2!1sen!2sin"
            width="100%"
            height="auto"
            style="border: 0"
            allowfullscreen="true"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<style scoped>
div {
  font-size: 18px;
  font-family: "Roboto";
}
</style>
