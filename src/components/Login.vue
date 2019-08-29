<template>
  <div>
    <div class="section bucketed">
      <div class="columns is-centered">
        <div class="column max is-centered">
          <div class="box">
            <div class="columns has-text-centered has-margin-10">
              <div class="column">
                <b-message v-show="errorMessage" title="Error" type="is-danger">{{errorMessage}}</b-message>
                <figure class="image is-64x64 has-image-centered">
                  <img class="is" src="./../assets/bikelogo.png" />
                </figure>
                <p class="title is-2">Log in</p>
              </div>
            </div>

            <Linput placeholder="username" v-model="username" />
            <Linput placeholder="password" :hide="true" v-model="pwd" />
            <div class="columns has-margin-10">
              <div class="column">
                <b-button
                  type="is-primary is-fullwidth is-medium"
                  v-bind:disabled="loading"
                  v-bind:loading="loading"
                  @click="checkInputs()"
                  rounded
                >Log in</b-button>
              </div>
            </div>
            <div class="is-divider" data-content="OR"></div>
            <div class="column has-text-centered clickable" @click="routeToRegister()">
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
    return {
      username: "",
      pwd: ""
    };
  },
  methods: {
    routeToRegister() {
      this.$router.push("/register");
    },
    checkInputs() {
      this.$store.dispatch("checkInputs", { name: this.username, password: this.pwd });
    },
  },
  computed: {
    errorMessage() {
      return this.$store.getters["getError"];
    },
    loading() {
      return this.$store.getters["isLoading"];
    }
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

.clickable {
  cursor: pointer;
}
</style>