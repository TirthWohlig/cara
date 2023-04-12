<template>
    <div>
        <v-row id="footer">
      <v-col md="4"
        ><img height="50px" src="../assets/logo.png" alt=""
      /></v-col>
      <v-col md="4"
        ><div>
          <ul style="list-style: none;">
            <li>
              <router-link to="/shop">Shop</router-link>
            </li>
            <li>
              <router-link to="/about">About</router-link>
            </li>
            <li>
              <router-link to="/contact">Contact</router-link>
            </li>
          </ul>
        </div></v-col
      >
      <v-col md="4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15082.396696471516!2d72.8960068!3d19.0813529!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8d1dc2d4e93%3A0xaac7b2a8db110f47!2sWohlig%20Transformations%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1681299509635!5m2!1sen!2sin"
          width="400"
          height="300"
          style="border: 0"
          allowfullscreen="true"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe
      ></v-col>
    </v-row>
    </div>
</template>