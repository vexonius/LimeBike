import Vue from "vue";
import VueRouter from "vue-router";
import Landing from "@/components/Landing.vue";
import Register from "@/components/Register.vue";
import Login from "@/components/Login.vue";
import Checkout from "@/components/Checkout.vue";
import Home from "@/views/Home.vue";
import Receipts from '@/views/Receipts.vue';

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
    },
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: '/receipts',
      name: 'receipts',
      component: Receipts
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: Checkout
    },
    {
      path: '*',
      redirect: "/home"
    }
  ]
});
