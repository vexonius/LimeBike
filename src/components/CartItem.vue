<template>
  <div class="level has-margin-20">
    <div class="level-item level-left">
      <figure class="image is-32x32 is-16by10">
        <img :src="product.item.photoUrl" />
      </figure>
    </div>
    <div class="level-item level-left">
      <div>
        <p class="subtitle is-6 max-120">{{product.item.name}}</p>
      </div>
    </div>
    <div class="level-item min-100 level-center">
      <div class="level">
        <b-button class="is-light" @click="addOneMore()">
          <span class="icon is-small level-item">
            <b-icon pack="fas" icon="plus" size="is-small"></b-icon>
          </span>
        </b-button>
        <p class="subtitle is-6 has-padding-10">{{product.amount}}x</p>
        <b-button class="is-light" @click="removeOne()">
          <span class="icon is-small level-item">
            <b-icon pack="fas" icon="minus" size="is-small"></b-icon>
          </span>
        </b-button>
      </div>
    </div>
    <div class="level-item min-60 level-right">
      <div>
        <p class="title is-6">${{product.item.price}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartItem',
  props: {
    product: {
      type: Object,
      default: null
    },
    index: {
      type: Number
    }
  },
  computed: {
    name() {
      return this.data
    }
  },
  methods: {
    addOneMore() {
      this.$store.dispatch('addOneMore', this.index)
    },
    removeOne() {
      console.log(this.index)
      this.$store.dispatch('removeOne', this.index)
    }
  }
}
</script>

<style lang="scss" scoped>
.max-120 {
  margin-left: 20px;
  margin-right: 20px;
  width: 140px;
  max-width: 120px;
}

.min-100 {
  min-width: 120px;
}

.min-60 {
  min-width: 60px;
}

.has-margin-20 {
  margin: 20px;
}

.has-padding-10 {
  padding: 10px;
}
</style>