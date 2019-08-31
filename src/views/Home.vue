<template>
  <div class="section is-widescreen">
    <div class="columns">
      <div class="column is-one-quarter">
        <div class="card dark fixed">
          <div class="card-content">
            <p class="subtitle light">Filter by</p>
            <div class="field">
              <div v-for="filter in filters" :key="filter.id" class="field">
                <b-checkbox class="light" v-model="filter.value">{{ filter.name }}</b-checkbox>
              </div>
            </div>

            <p class="subtitle light">Sort by</p>
            <div v-for="n in 3" :key="n" class="field">
              <b-radio class="light" v-model="radio" name="name" native-value="Jack">Jack</b-radio>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="columns is-multiline">
          <div
            class="column is-12-mobile is-6-tablet is-4-widescreen is-6-desktop"
            v-for="product in products"
            :key="product.serialNumber"
          >
            <BikeItem
              :name="product.name"
              :photoUrl="product.photoUrl"
              :price="product.price"
              :category="product.category"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BikeItem from "./../components/BikeItem.vue";

export default {
  name: "home",
  components: {
    BikeItem
  },
  data() {
    return {
      filters: [
        { name: "CASUAL", id: 1, value: false },
        { name: "BASIC", id: 2, value: false },
        { name: "SPORT", id: 3, value: false },
        { name: "PROFESSIONAL", id: 4, value: false }
      ]
    };
  },
  methods: {
    isFilteringOn() {
      return false; // this.filters.map(filter => filter.value == true);
    }
  },
  computed: {
    products() {
      return this.filteringOn
        ? this.$store.getters["getProductsFiltered"]
        : this.$store.getters["getAllProducts"];
    },
    filteringOn() {
      if (this.isFilteringOn()) return true;

      return false;
    }
  },
  mounted() {
    return this.$store.dispatch("fetchProducts");
  }
};
</script>

<style scoped>
.fixed {
  position: sticky;
  top: 24px;
}

.dark {
  background: #252526;
  border-radius: 10px;
}

.light {
  color: #eeeeee;
}
</style>


