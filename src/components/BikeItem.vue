<template>
  <div class="card is-shadowless card-style">
    <div class="card-image" @click="imageModal(bike.photoUrl)">
      <figure class="image is-16by10">
        <img class="img-style" :src="bike.photoUrl" alt="Placeholder image" />
      </figure>
    </div>
    <div class="card-content">
      <span class="tag is-light has-margin-10">{{bike.category}}</span>
      <p class="title is-5">{{bike.name}}</p>
      <b-button rounded outlined class="is-primary bold-text is-pulled-right" @click="addToBasket()">Add to cart</b-button>
      <p class="title is-primary is-4">${{bike.price}}/day</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "BikeItem",
  data() {
    return {
    };
  },
  props: {
    bike: {
      type: Object,
      default: null
    },
  },
  methods: {
    imageModal(url) {
      this.$buefy.modal.open(
        `<p class="image is-16by10">
            <img src="${url}">
          </p>`
      );
    },
    addToBasket(){
      this.$store.dispatch("addItemToCart", this.bike);
    }
  }
};
</script>

<style>
.card-style {
  border-radius: 12px;
  border: 2px solid #eeeeee;
}

.img-style {
  padding: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

.translation-anim:hover {
  webkit-transition: all 172ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
  transition: all 172ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
}

.has-margin-10 {
  margin-bottom: 10px;
}
</style>