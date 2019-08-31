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

        <div class="navbar-menu">
          <div class="navbar-end has-text-centered">
            <div class="navbar-item">
              <div class="dropdown is-hoverable">
                <div class="dropdown-trigger">
                  <button
                    class="button is-text"
                    aria-haspopup="true"
                    aria-controls="dropdown-menu4"
                  >
                    <span>Hello, {{user.username}}</span>
                    <span class="icon is-small">
                      <b-icon pack="fas" icon="user" size="is-small"></b-icon>
                    </span>
                  </button>
                </div>
                <div class="dropdown-menu" id="dropdown-menu4" role="menu">
                  <div class="dropdown-content">
                    <a href="/transactions" class="dropdown-item">Transactions</a>
                    <a href="/logout" class="dropdown-item">Log out</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="navbar-item">
              <button class="button is-text" aria-haspopup="true" aria-controls="dropdown-menu4">
                <span class="icon is-small">
                  <b-icon pack="fas" icon="shopping-basket" size="is-small"></b-icon>
                  <span class="badge"> 24 </span>
                </span>
              </button>
            </div>
            <div class="navbar-item" v-show="false">
              <div class="buttons">
                <b-button class="button is-light" rounded @click="routeToLogin()">Log in</b-button>
                <b-button
                  class="button is-primary has-text-white"
                  rounded
                  @click="routeToRegister()"
                >
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
      this.$router.push("/");
    },
    routeToLogin() {
      this.$router.push("/login");
    },
    routeToRegister() {
      this.$router.push("/register");
    }
  },
  computed: {
    user() {
      return this.$store.getters["getUser"];
    }
  }
};
</script>

<style lang="scss" scoped>
.is-marginless {
  margin: 0;
  padding: 10px;
}

.badge {
  font-size: 12px;
  padding: 4px;
  color: #ffffff;
  border-radius: 50%;
  text-decoration: none;
  background: #3ddc84;
}
</style>