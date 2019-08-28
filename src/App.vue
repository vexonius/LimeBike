<template>
  <div id="app">
    <Navbar />
    <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
  </div>
</template>

<script>
import AdminDash from "./components/AdminDash.vue";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
import Landing from "./components/Landing.vue";
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Heebo:400,800&display=swap');
@import "~bulma/sass/utilities/_all";

// Set your colors
$primary: #3ddc84;
$primary-invert: findColorInvert($primary);
$twitter: #4099FF;
$twitter-invert: findColorInvert($twitter);

// Setup $colors to use as bulma classes
$colors: (
    "white": ($white, $black),
    "black": ($black, $white),
    "light": ($light, $light-invert),
    "dark": ($dark, $dark-invert),
    "primary": ($primary, $primary-invert),
    "info": ($info, $info-invert),
    "success": ($success, $success-invert),
    "warning": ($warning, $warning-invert),
    "danger": ($danger, $danger-invert),
    "twitter": ($twitter, $twitter-invert)
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";


body {
  margin: 0;
  padding: 0;
  color: #ffffff;
}

#app {
  font-family: 'Heebo', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
}
#nav {
  padding: 10px;
  a {
    font-weight: bold;
    color: #cacaca;
    &.router-link-exact-active {
      color: #3ddc84;
    }
  }
}
</style>
