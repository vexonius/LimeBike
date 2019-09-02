<template>
  <div class="section">
    <div class="container is-widescreen">
      <p class="title">Checkout</p>
      <div class="columns">
        <div class="column is-centered">
          <div class="section">
            <b-steps v-model="activeStep" :animated="true">
              <b-step-item label="Complete order" :clickable="true">
                <div class="column">
                  <div class="section cart-style">
                    <p class="title is-5">Items in cart</p>

                    <CartItem
                      v-for="(item, index) in cartItems"
                      :key="item.id"
                      :product="item"
                      :index="index"
                    />
                    <p class="title is-4 has-text-right has-margin-10">${{total}}</p>
                    <div class="divider"></div>
                  </div>
                </div>
              </b-step-item>
              <b-step-item label="Additional info" :clickable="true" :is-active="nextStep">
                <div class="section">
                  <Linput v-model="entered.address" placeholder="Address" />
                  <div class="columns">
                    <div class="column">
                      <Linput v-model="entered.cityNumber" placeholder="City number" />
                    </div>
                    <div class="column">
                      <Linput v-model="entered.city" placeholder="City" />
                    </div>
                  </div>

                  <Linput v-model="entered.country" placeholder="Country" />
                </div>
              </b-step-item>

              <b-step-item label="Verify" :clickable="true">
                <div class="columns">
                  <div class="column section">
                    <p class="title is-4 is-dark is-spaced">Please double check entered information</p>
                    <b-notification class="has-text-dark" :closable="false">
                      <p class="subtitle is-5">
                        {{user.firstName}} {{user.lastName}}
                        <br />
                        {{entered.address}}
                        <br />
                        {{entered.cityNumber}} {{entered.city}}
                        <br />
                        {{entered.country}}
                      </p>
                    </b-notification>
                    <h1 class="title is-4">Payment option</h1>
                    <b-button
                      class="is-info"
                      :loading="loading"
                      :disabled="disabled"
                      @click="fakeLoading()"
                    >
                      <span class="title is-5 has-text-white">PayPal</span>
                    </b-button>
                  </div>
                </div>
              </b-step-item>
            </b-steps>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartItem from "@/components/CartItem.vue";
import Linput from "@/components/Linput.vue";
import { setTimeout } from "timers";

export default {
  name: "Checkout",
  components: {
    CartItem,
    Linput
  },
  data() {
    return {
      entered: {
        city: '',
        address: '',
        cityNumber: '',
        country: ''
      },
      loading: false,
      disabled: false,
      activeStep: 0,
      nextStep: false
    };
  },
  created() {
    let token = this.$store.dispatch("getAuthToken");
    console.log(this.transactionData);
  },
  methods: {
    fakeLoading() {
      this.loading = true;
      this.disabled = true;

      setTimeout(() => {
        this.loading = false;
        this.disabled = false;
        this.$store.dispatch("createNewTransaction", this.user.id, this.transactionData);
        this.$router.push("/receipts");
      }, 500);
    },
  },
  computed: {
    cartItems() {
      return this.$store.getters["getItemsInCart"];
    },
    total() {
      return this.$store.getters["getTotal"];
    },
    user() {
      return this.$store.getters["getUser"];
    },
    transactionData(){
      return this.$store.getters["getTransactionData"];
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~bulma-divider";

.cart-style {
  border-radius: 12px;
  border: 2px solid #eeeeee;
}

.has-margin-10 {
  margin: 0px;
}

.margin-10 {
  margin-top: -12px;
}
</style>