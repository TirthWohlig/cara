<template>
  <div>
    <div>
      <v-parallax
        height="640"
        src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
      ></v-parallax>
    </div>
    <div style="padding: 2%; text-align: center">
      <h1>
        Please feel free to contact us regarding of our services using the
        following details:
      </h1>
    </div>
    <v-container style="padding: 4%">
      <v-row>
        <v-col cols="12" md="6">
          <h2>
            Address: <br />K Serg Ltd,<br />8 Waterool Road,<br />Ipswich IPI 2Y
          </h2>
          <br />
          <h2>Contact: <br />T: 1234567889<br />E: sales@gmail.com</h2>
        </v-col>
        <v-col cols="12" md="6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1785100243324!2d55.27218771476185!3d25.197201837884236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2sBurj%20Khalifa!5e0!3m2!1sen!2sin!4v1681300956383!5m2!1sen!2sin"
            width="100%"
            height="300"
            style="border: 0"
            allowfullscreen="true"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </v-col>
      </v-row>
    </v-container>

    <v-row style="background-color: #eee !important; padding: 3%">
      <v-col cols="12" md="4">
        <img height="50px" src="../assets/logo.png" />
      </v-col>
      <v-col cols="12" md="4">
        <v-column>
          <v-col cols="4" md="12">
            <div>
              <div>Shop</div>
            </div>
          </v-col>
          <v-col cols="4" md="12">
            <div>About</div>
          </v-col>

          <v-col cols="4" md="12">
            <div>Contact</div>
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
