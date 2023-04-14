import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import ContactView from "../views/ContactView.vue";
import AboutView from "../views/AboutView.vue";
import ShopView from "../views/ShopView.vue";
import Mens from "../views/Men_Products.vue";
import Womens from "../views/Women_Products.vue";
import ErrorPage from "../components/ErrorPage.vue";
import Accessories from "../pages/Accessories.vue";
import Bandhgalas from "../pages/Bandhgalas.vue";
import Bandhis from "../pages/Bandhis.vue";
import Dresses from "../pages/Dresses.vue";
import Jackets from "../pages/Jackets.vue";
import Jumpsunit from "../pages/Jumpsunit.vue";
import Kurtas from "../pages/Kurtas.vue";
import LehengaSets from "../pages/LehengaSets.vue";
import SariSets from "../pages/SariSets.vue";
import Sherwanis from "../pages/Sherwanis.vue";
import Tops_Bottoms from "../pages/Tops&Bottoms.vue";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
  {
    path: "/shop",
    name: "shop",
    component: ShopView,
  },
  {
    path: "/mens",
    name: "mens",
    component: Mens,
  },
  {
    path: "/womens",
    name: "womens",
    component: Womens,
  },
  {
    path: "/accessories",
    name: "accessories",
    component: Accessories,
  },
  {
    path: "/bandhgalas",
    name: "bandhgalas",
    component: Bandhgalas,
  },
  {
    path: "/bandhis",
    name: "bandhis",
    component: Bandhis,
  },
  {
    path: "/dresses",
    name: "dresses",
    component: Dresses,
  },
  {
    path: "/jackets",
    name: "jackets",
    component: Jackets,
  },
  {
    path: "/jumpsunit",
    name: "jumpsunit",
    component: Jumpsunit,
  },
  {
    path: "/kurtas",
    name: "kurtas",
    component: Kurtas,
  },
  {
    path: "/lehengaSets",
    name: "lehengaSets",
    component: LehengaSets,
  },
  {
    path: "/sariSets",
    name: "sariSets",
    component: SariSets,
  },
  {
    path: "/sherwanis",
    name: "sherwanis",
    component: Sherwanis,
  },
  {
    path: "/tops_Bottoms",
    name: "tops_Bottoms",
    component: Tops_Bottoms,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "error",
    component: ErrorPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
