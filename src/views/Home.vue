<template>
  <div class="section is-widescreen custom-margins">
    <div class="columns">
      <div class="column is-one-quarter">
        <div class="card dark fixed">
          <div class="card-content has-padding-40">
            <p class="subtitle light">Filter by</p>
            <div class="field">
              <div v-for="filter in filters" :key="filter.id" class="field">
                <b-checkbox class="light" v-model="filter.value">{{ filter.name }}</b-checkbox>
              </div>
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
            <BikeItem :bike="product" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BikeItem from './../components/BikeItem.vue'

export default {
  name: 'Home',
  components: {
    BikeItem
  },
  computed: {
    products() {
      return this.filteringOn
        ? this.$store.getters['getProductsFiltered']
        : this.$store.getters['getAllProducts']
    },
    filteringOn() {
      return this.$store.getters['isFilteringOn']
    },
    filters() {
      return this.$store.getters['getFilters']
    }
  },
  mounted() {
    return this.$store.dispatch('fetchProducts')
  }
}
</script>

<style scoped>
.custom-margins {
  margin: 0 60px;
}

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

.has-padding-40 {
  padding-top: 40px;
  padding-bottom: 40px;
}
</style>


