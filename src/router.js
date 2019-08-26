import Vue from "vue";
import VueRouter from "vue-router";
import Landing from "@/components/Landing.vue";
import Register from "@/components/Register.vue";
import Login from "@/components/Login.vue";

Vue.use(VueRouter);

export default new VueRouter({
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
    }
  ]
});
