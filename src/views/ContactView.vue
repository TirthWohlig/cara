<template>
  <div>
    <div>
      <div class="container1">
        <img src="../assets/contact.png" height="640px" style="width: 100%" />
        <div class="centered">Contact</div>
      </div>
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
            Address: <br />Wohlig Transformations Pvt. Ltd.<br />
            Neelkanth Corporate It Park, Unit No 805 and 806, 8th Floor,<br />
            Near Vidyavihar Station<br />
            Vidyavihar West,<br />
            Mumbai, Maharashtra 400086
          </h2>
          <br />
          <h2>Contact: <br />T: 6162649892200 <br />E: <a href="mailto:info@wohlig.com">info@wohlig.com</a></h2>
        </v-col>
        <v-col cols="12" md="6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15082.396696471516!2d72.8960068!3d19.0813529!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8d1dc2d4e93%3A0xaac7b2a8db110f47!2sWohlig%20Transformations%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1681299509635!5m2!1sen!2sin"
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
              <div><a href="/">Home</a></div>
            </div>
          </v-col>
          <v-col cols="4" md="12">
            <div><a href="/shop">Products</a></div>
          </v-col>

          <v-col cols="4" md="12">
            <div><a href="/about">About</a></div>
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