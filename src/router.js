import Vue from "vue";
import VueRouter from "vue-router";
import $store from "./store/store";
import Landing from "./views/Landing.vue";
import Register from "@/components/Register.vue";
import Login from "@/components/Login.vue";
import Checkout from "./views/Checkout.vue";
import Home from "./views/Home.vue";
import Receipts from "./views/Receipts.vue";

Vue.use(VueRouter);

let router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "landing",
      component: Landing
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/home",
      name: "home",
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/receipts",
      name: "receipts",
      component: Receipts,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/checkout",
      name: "checkout",
      component: Checkout,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "*",
      redirect: "/home"
    }
  ]
});

router.beforeEach((to, from, next) => {
  let logged = $store.getters["isUserLogged"];
  let isAuthRoute = to.matched.some(item => item.meta.requiresAuth);

  if (isAuthRoute && logged) return next();
  if (isAuthRoute) return next({ name: "login" });
  next();
});

export default router;
