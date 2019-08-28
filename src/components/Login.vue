<template>
  <div>
    <div class="section bucketed">
      <div class="columns is-centered">
        <div class="column max is-centered">
          <div class="box">
            <div class="columns has-text-centered has-margin-10">
              <div class="column">
                <figure class="image is-64x64 has-image-centered">
                  <img class="is" src="./../assets/bikelogo.png" />
                </figure>
                <p class="title is-2">Log in</p>
              </div>
            </div>

            <Linput placeholder="username" />
            <Linput placeholder="password" :hide="true" />
            <div class="columns has-margin-10">
              <div class="column">
                <b-button type="is-primary is-fullwidth is-medium" rounded>Log in</b-button>
              </div>
            </div>
            <div class="is-divider" data-content="OR"></div>
            <div class="column has-text-centered" @click="routeToRegister()">
              <p class="subtitle is-6">
                Don't have an account?
                <strong>Sign up</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Linput from "./Linput.vue";

export default {
  name: "Login",
  components: {
    Linput
  },
  data() {
    return {};
  },
  methods: {
    routeToRegister() {
      this.$router.push("/register");
    },
  },
  created () {
        this.$store.dispatch('loginUser', {name:"etino", password: "password"});
  },
};
</script>

<style lang="scss" scoped>
@import "~bulma-divider";

.bucketed {
  background: #f3f3f3;
  min-height: 100vh;
}

.input {
  background: #eeeeee;
  border: 0;
}

.max {
  max-width: 500px;
}

.has-margin-10 {
  margin: 10px;
}

.has-image-centered {
  margin-left: auto;
  margin-right: auto;
}
</style>