<template>
  <div class="wrap-logo" :class="size">
    <img src="@/assets/logo.svg" alt="">
  </div>
</template>

<script>
  export default {
    name: 'Logo',
    props: {
      size: String,
    },
    computed: {
      widthLogo() {
        if (window.innerWidth < 768) {
          return 100
        }
        return this.width;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


  .large img {
    width: 60%;
  }

    .medium img {
    width: 200px;
  }

  @media (max-width: 767.98px) {
    .large img {
    width: 80%;
  }

    .medium img {
    width: 150px;
  }
  }
</style>