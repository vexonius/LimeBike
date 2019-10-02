<template>
  <div>
    <div class="container is-widescreen">
      <div class="section is-vcentered is-centered columns">
        <div class="column has-text-centered has-margin-top-40">
          <h1 class="title is-spaced is-1">
            Stay
            <strong class="highlighted">active</strong>
            <br />on your vacation
          </h1>
          <b-button class="is-primary is-large" @click="routeToHome()" rounded outlined>Rent LimeBike</b-button>

          <figure class="video">
            <video playsinline autoplay muted loop>
              <source
                src="https://cdn.dribbble.com/users/3419830/videos/23722/cyclists.mp4"
                type="video/mp4"
              />
            </video>
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: "Landing",
  components: {
    
  },
  methods: {
    routeToHome() {
      this.$router.push('/home');
    }
  },
};
</script>

<style lang="scss" scoped>
$primary: #3ddc84;

.highlighted {
  color: $primary;
}

.has-margin-top-40{
    margin-top: 40px;
}


</style>