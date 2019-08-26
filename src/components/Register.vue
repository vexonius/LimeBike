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
                <p class="title is-2">Create an account</p>
              </div>
            </div>
            <div class="columns">
              <div class="column has-padding-left-10">
                <Linput placeholder="First name" />
              </div>
              <div class="column has-padding-right-10">
                <Linput placeholder="Last Name" />
              </div>
            </div>

            <Linput placeholder="Email" />
            <Linput placeholder="Username" />

            <Linput placeholder="Password" hide="true" />

            <Linput placeholder="Repeat Password" hide="true" />

            <div class="columns has-margin-10">
              <div class="column">
                <b-button type="is-primary is-fullwidth is-medium" rounded>Register</b-button>
              </div>
            </div>
            <div class="is-divider" data-content="OR"></div>
            <div class="column has-text-centered">
              <p class="subtitle is-6" @click="routeToLogin()">Already have an account? <strong>Log in</strong></p>
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
  name: "Register",
  components: {
    Linput
  },
  data() {
    return {};
  },
  methods: {
    routeToLogin() {
      this.$router.push('/login');
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

.has-padding-left-10{
  padding: 0;
  padding-left: 10px;
}

.has-padding-right-10{
  padding: 0;
  padding-right: 10px;
}

.no-padd {
  padding: 0;
}

.max {
  max-width: 700px;
}

.has-margin-10 {
  margin: 10px;
}

.has-image-centered {
  margin-left: auto;
  margin-right: auto;
}

strong {
  color: #3ddc84;
}
</style>