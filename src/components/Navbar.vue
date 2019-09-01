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
            <div class="navbar-item" v-show="isUserLogged">
              <div class="dropdown is-hoverable is-right">
                <div class="dropdown-trigger">
                  <button
                    class="button is-text has-padding-sideways"
                    aria-haspopup="true"
                    aria-controls="dropdown-menu4"
                  >
                    <span>Hello, {{user.username}}</span>
                    <span class="icon is-small">
                      <b-icon pack="fas" icon="user" size="is-small"></b-icon>
                    </span>
                  </button>
                </div>
                <div class="dropdown-menu" role="menu">
                  <div class="dropdown-content">
                    <a @click="routeToReceipts()" class="dropdown-item">Transactions</a>
                    <a @click="logout()" class="dropdown-item">Log out</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="navbar-item" v-show="isUserLogged">
              <div class="dropdown is-hoverable is-right">
                <div class="dropdown-trigger dropdown-padding ">
                  <button
                    class="button is-text"
                    aria-haspopup="true"
                    aria-controls="dropdown-menu4"
                  >
                    <span class="icon is-small">
                      <b-icon pack="fas" icon="shopping-basket" size="is-small"></b-icon>
                      <span class="badge" v-show="itemCount">{{itemCount}}</span>
                    </span>
                  </button>
                </div>
                <div class="dropdown-menu" role="menu">
                  <div class="dropdown-content">
                    <a
                      class="dropdown-item"
                      v-show="!itemCount"
                    >Overhere will appear all items you added to cart</a>
                    <CartItem v-for="(item, index) in cartItems" :key="item.id" :product="item" :index="index"/>

                    <a
                      class="dropdown-item title is-5 has-text-right"
                      v-show="itemCount"
                    >Total ${{total}}</a>
                    <a
                      class="dropdown-item has-background-primary has-text-centered title is-6"
                      @click="routeToCheckout()"
                      v-show="itemCount"
                    >Proceed to checkout</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="navbar-item" v-show="!isUserLogged">
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
import CartItem from "@/components/CartItem.vue";

export default {
  name: "Navbar",
  components: {
    CartItem
  },
  methods: {
    routeToHome() {
      this.$router.push("/");
    },
    routeToLogin() {
      this.$router.push("/login");
    },
    routeToRegister() {
      this.$router.push("/register");
    },
    routeToReceipts() {
      this.$router.push("/receipts");
    },
    routeToCheckout() {
      this.$router.push("/checkout");
    },
    logout() {
      this.$store.dispatch("logout");
    }
  },
  computed: {
    user() {
      return this.$store.getters["getUser"];
    },
    isUserLogged() {
      return this.$store.getters["isUserLogged"];
    },
    itemCount() {
      return this.$store.getters["getItemsCount"];
    },
    cartItems() {
      return this.$store.getters["getItemsInCart"];
    },
    total() {
      return this.$store.getters["getTotal"];
    }
  }
};
</script>


<style lang="scss" scoped>
.is-marginless {
  margin: 0;
  padding: 10px;
}

.dropdown-padding {
  padding-left: 20px;
  padding-right: 20px;
}

.badge {
  width: 18px;
  height: 18px;
  text-align: center;
  font-size: 10px;
  padding: 4px;
  color: #ffffff;
  border-radius: 45%;
  text-decoration: none;
  background: #3ddc84;
}

.badge::before {
  display: inline-block;
}
</style>