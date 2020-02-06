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
                <p class="title is-2">Create an account</p>
              </div>
            </div>
            <div class="columns">
              <div class="column has-padding-left-10">
                <Linput placeholder="First name" v-model="user.firstName" />
              </div>
              <div class="column has-padding-right-10">
                <Linput placeholder="Last Name" v-model="user.lastName" />
              </div>
            </div>

            <Linput placeholder="Email" v-model="user.email" />
            <Linput placeholder="Username" v-model="user.username" />

            <Linput placeholder="Password" :hide="true" v-model="user.password" />

            <Linput placeholder="Repeat Password" :hide="true" v-model="user.passwordrep" />

            <div class="columns has-margin-10">
              <div class="column">
                <b-button
                  type="is-primary is-fullwidth is-medium"
                  v-bind:disabled="loading"
                  v-bind:loading="loading"
                  @click="registerUser()"
                  rounded
                >Register</b-button>
              </div>
            </div>
            <div class="is-divider" data-content="OR"></div>
            <div class="column has-text-centered clickable">
              <p class="subtitle is-6" @click="routeToLogin()">
                Already have an account?
                <strong>Log in</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Linput from './Linput.vue'

export default {
  name: 'Register',
  components: {
    Linput
  },
  data() {
    return {
      user: {
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        passwordrep: ''
      }
    }
  },
  methods: {
    routeToLogin() {
      this.$router.push('/login')
    },

    registerUser() {
      this.$store.dispatch('registerUser', this.user)
    }
  },
  computed: {
    errorMessage() {
      return this.$store.getters['getError']
    },
    loading() {
      return this.$store.getters['loading']
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~bulma-divider';

.bucketed {
  background: #f3f3f3;
  min-height: 100vh;
}

.input {
  background: #eeeeee;
  border: 0;
}

.has-padding-left-10 {
  padding: 0;
  padding-left: 10px;
}

.has-padding-right-10 {
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

.clickable {
  cursor: pointer;
}

strong {
  color: #3ddc84;
}
</style>