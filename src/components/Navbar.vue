<template>
  <div>
    <section id="header">
      <a href="/"><img src="../assets/logo.png" class="logo" /></a>
      <div>
        <ul id="navbar">
          <li>
            <router-link to="/mens">Men</router-link>
          </li>
          <li>
            <router-link to="/womens">Women</router-link>
          </li>
          <li>
            <router-link to="/shop">Produts</router-link>
          </li>
          <!-- <li>
            <router-link class="bag"  to="/cart"><i class="fas fa-shopping-bag"></i></router-link>
          </li> -->

          <a href="#" id="close" @click="close()"
            ><img height="30px" class="close" src="../assets/close.png" alt=""
          /></a>
        </ul>
      </div>
      <div id="mobile">
        <!-- <i class="fas fa-shopping-bag"></i> -->
        <i id="bar" @click="bar()" class="fas fa-outdent"></i>
      </div>
    </section>
  </div>
</template>

<style scoped>
#header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 80px;
  background-color: #e3e6f5;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.06);
  z-index: 999;
  position: sticky;
  top: 0;
  left: 0;
}
#navbar {
  display: flex;
  align-items: center;
  justify-content: center;
}
#navbar li {
  list-style: none;
  padding: 0 20px;
  position: relative;
}
#navbar li a {
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  color: #1a1a1a;
  transition: 0.4s ease;
}
#navbar li a:hover {
  color: #088178;
}
#navbar li a:hover,
#navbar li a.active {
  color: #088178;
}
#navbar li a.active::after,
#navbar li a:hover::after {
  content: "";
  width: 30%;
  height: 2px;
  background: #088178;
  position: absolute;
  bottom: -4px;
  left: 20px;
}
#mobile {
  display: none;
  align-items: center;
}
#navbar.active {
  right: 0px;
}
@media (max-width: 799px) {
  #navbar {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    position: fixed;
    top: 0;
    right: -300px;
    height: 100vh;
    width: 300px;
    background-color: #e3e6f3;
    box-shadow: 0 40px 60px rgba(0, 0, 0, 0.1);
    padding: 80px 0 0 10px;
    transition: 0.4s;
  }
  #navbar li {
    margin-bottom: 25px;
  }
  #mobile {
    display: flex;
    align-items: center;
  }
  #mobile i {
    color: #1a1a1a;
    font-size: 24px;
    padding-left: 20px;
  }
  #close {
    position: absolute;
    top: 30px;
    left: 30px;
    color: #1a1a1a;
    font-size: 24px;
  }
  /* .bag {
    display: none;
  } */
}

@media (min-width: 799px) {
  .close {
    display: none;
  }
}
@media (max-width: 600px) {
  #header {
    padding: 10px 30px;
  }

  h2 {
    font-size: 32px;
  }
  h1 {
    font-size: 38px;
  }
}
</style>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    close() {
      navbar.classList.remove("active");
    },
    bar() {
      navbar.classList.toggle("active");
    },
  },
};
</script>