<template>
  <div class="wrap-logo" :class="size">
    <h1>AppsLife</h1>
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" x="0px" y="0px"
      viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
      <path d="M16.667,43.33C16.667,69.104,37.559,90,63.333,90v-6.667c-22.093,0-40-17.91-40-40.003H16.667z"></path>
      <path
        d="M63.333,16.667c-14.729,0-26.666,11.94-26.666,26.664C36.667,58.06,48.604,70,63.333,70v6.667  C44.922,76.667,30,61.741,30,43.33C30,24.922,44.922,10,63.333,10V16.667z">
      </path>
      <path
        d="M76.667,43.333C76.667,35.97,70.7,30,63.333,30C55.967,30,50,35.97,50,43.333s5.967,13.334,13.333,13.334v6.666  c-11.048,0-20-8.955-20-20.003c0-11.045,8.952-19.997,20-19.997c11.049,0,20,8.952,20,19.997L76.667,43.333z">
      </path>
    </svg>
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
  .wrap-logo {
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }

  .wrap-logo svg {
    /* width: 36%; */
    fill: rgba(224, 92, 92, 1);
  }

  .wrap-logo h1 {
    font-family: 'Poiret One', cursive;
    color: #ffffff;
    margin: 0;
    margin-left: -10%;
    text-align: left;
    line-height: 1.4;
  }

  .large h1 {
    font-size: 100px;
    width: 65%;
    /* text-align: left; */
  }

  .large svg {
    width: 35%;
  }

  .medium h1 {
    font-size: 50px;
  }

  .medium svg {
    width: 115px;
  }

  .wrap-logo svg {
    margin-bottom: 1.5%;
  }

  @media (max-width: 767.98px) {
    .large h1 {
      font-size: 55px;
      width: 65%;
      /* text-align: left; */
    }

    .large svg {
      width: 35%;
    }

    .medium h1 {
      font-size: 30px;
    }

    .medium svg {
      width: 78px;
    }
  }
</style>