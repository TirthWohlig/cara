import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import ContactView from "../views/ContactView.vue";
import AboutView from "../views/AboutView.vue";
import ShopView from "../views/ShopView.vue";
import Mens from "../views/Men_Products.vue";
import Womens from "../views/Women_Products.vue";
import ErrorPage from "../components/ErrorPage.vue";
import Accessories from "../views/Accessories.vue";
import Bandhgalas from "../views/Bandhgalas.vue";
import Bandhis from "../views/Bandhis.vue";
import Dresses from "../views/Dresses.vue";
import Kurtas from "../views/Kurtas.vue";
import LehengaSets from "../views/LehengaSets.vue";
import SariSets from "../views/SariSets.vue";
import Sherwanis from "../views/Sherwanis.vue";
// import cart from "../views/cart.vue";


Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  // {
  //   path: "/cart",
  //   name: "cart",
  //   component: cart,
  // },

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
    path: "/kurtas",
    name: "kurtas",
    component: Kurtas,
  },
  {
    path: "/lehenga_sets",
    name: "lehengaSets",
    component: LehengaSets,
  },
  {
    path: "/sari_sets",
    name: "sariSets",
    component: SariSets,
  },
  {
    path: "/sherwanis",
    name: "sherwanis",
    component: Sherwanis,
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
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
