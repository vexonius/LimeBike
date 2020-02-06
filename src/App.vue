<template>
  <div id="app">
    <Navbar />
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  components: {
    Navbar
  },
  watch: {
    $route(to, from) {
      this.$store.dispatch('clearError')
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Heebo:400,500,800&display=swap');
@import '~bulma/sass/utilities/_all';

// Set your colors
$primary: #3ddc84;
$primary-invert: findColorInvert($primary);

// tiles
$title-family: false;
$body-family: 'Heebo', sans-serif;

// Custom buttons
$button-border-width: 2px;

// Setup $colors to use as bulma classes
$colors: (
  'white': (
    $white,
    $black
  ),
  'black': (
    $black,
    $white
  ),
  'light': (
    $light,
    $light-invert
  ),
  'dark': (
    $dark,
    $dark-invert
  ),
  'primary': (
    $primary,
    $primary-invert
  ),
  'info': (
    $info,
    $info-invert
  ),
  'success': (
    $success,
    $success-invert
  ),
  'warning': (
    $warning,
    $warning-invert
  ),
  'danger': (
    $danger,
    $danger-invert
  )
);

// Links
$link: $primary;

@import '~bulma';
@import '~buefy/src/scss/buefy';

body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Heebo', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
