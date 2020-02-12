<template>
  <section>
    <div class="container">
      <div class="column">
        <p class="title is-2">{{ thanks }}</p>
        <p class="subtitle is-4">Order #{{ id }}</p>
        <p class="content is-medium has-text-dark">
          {{ details }}
        </p>
        <div class="map-responsive">
          <iframe
            :src="frameSource"
            width="600"
            height="450"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Confirmation',
  data() {
    return {
      thanks: 'Thanks for your purchase!',
      details:
        'Your order is complete! Please check the map for pick' +
         'up location. Order details were sent to your email.',
      frameSource:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3' +
        '!1d4693.835795818857!2d16.437463226866377!3d43.5113' +
        '0046880291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!' +
        '3m3!1m2!1s0x0%3A0x99bae791017760ea!2sRent%20a%20bik' +
        'e%20in%20Split!5e0!3m2!1sen!2shr!4v1569927269485!5m' +
        '2!1sen!2shr'
    }
  },
  props: {
    id: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.map-responsive {
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;
  border: 0;
}
.map-responsive iframe {
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  position: absolute;
}
</style>
