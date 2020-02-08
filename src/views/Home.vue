<template>
  <div class="section is-widescreen custom-margins">
    <div class="columns">
      <div class="column is-one-quarter">
        <div class="card dark fixed">
          <div class="card-content has-padding-40">
            <p class="subtitle light">{{filterBy}}</p>
            <div class="field">
              <div v-for="(filter, key) in activeFilters" 
              :key="key" 
              class="field">
                <b-checkbox class="light" v-model="filter.value">
                  {{ filter.name }}
                </b-checkbox>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="columns is-multiline">
          <div
            class="column is-12-mobile is-6-tablet is-4-widescreen is-6-desktop"
            v-for="product in filteredProducts"
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
  data() {
    return {
      activeFilters: [],
      filterBy: 'Filter by'
    }
  },
  methods: {
    setupFilters() {
      for (let item in this.filters) {
        this.activeFilters.push({ name: item.toUpperCase(), value: false })
      }
    }
  },
  computed: {
    products() {
      return this.$store.getters['getAllProducts']
    },
    filters() {
      return this.$store.getters['getFilters']
    },
    filteredProducts() {
      let filters = this.activeFilters
        .filter(fltr => fltr.value)
        .map(fltr => fltr.name)

      return this.products.filter(product => {
        if (filters.length == 0) return true

        return filters.includes(product.category)
      })
    }
  },
  mounted() {
    this.setupFilters()
    this.$store.dispatch('fetchProducts')
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


