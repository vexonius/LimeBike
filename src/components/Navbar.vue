<template>
<div>
<div class="container is-widescreen">
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand" @click="routeToHome()">
      <a class="navbar-item">
        <img src="./../assets/bikelogo.png" width="34" />
      </a>

      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-start has-text-centered" @click="routeToHome()">
        <a class="navbar-item">
        <p class="title is-4">LimeBike</p>
        </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-end">
        <a class="navbar-item">Why choose us</a>
        <a class="navbar-item">Philosophy</a>
        <a class="navbar-item">Contact</a>
        <div class="navbar-item">
          <div class="buttons">
            <b-button class="button is-light" rounded @click="routeToLogin()">Log in</b-button>
            <b-button class="button is-primary has-text-white" rounded @click="routeToRegister()">
              <strong>Sign up</strong>
            </b-button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</div>
</div>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    routeToHome() {
      this.$router.push('/');
    },
    routeToLogin(){
      this.$router.push('/login');
    },
    routeToRegister(){
      this.$router.push('/register');
    }
  },
};
</script>

<style lang="scss" scoped>
</style>