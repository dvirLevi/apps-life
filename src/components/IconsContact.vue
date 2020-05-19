<template>
  <div class="w-100 center-all">
    <div class="center-all box-icon" :class="icon.aniClass" v-for="icon in icons" :key="icon.id">
      <a :href="icon.link">
        <!-- <img class="w-100" :src="icon.img" alt=""> -->
        <i :class="icon.icon"></i>
      </a>
    </div>
    <!-- <i style='font-size:60px' class='fab'>&#xf232;</i> -->
  </div>
</template>

<script>
  // import Logo from '@/components/Logo.vue'

  export default {
    name: 'IconsContact',
    props: {},
    components: {},
    data() {
      return {
        icons: [{
            img: require('../assets/whatsapp.png'),
            icon: "fab fa-whatsapp",
            link: "https://api.whatsapp.com/send?phone=972545993678",
            aniClass: "ani1",
            id: 1
          },
          {
            img: require('../assets/phon2.png'),
            icon: "fas fa-phone-alt",
            link: "tel:0545993678",
            aniClass: "ani2",
            id: 2
          },
          {
            img: require('../assets/gmail.png'),
            icon: "far fa-envelope",
            link: "mailto:dvirleviapp@gmail.com",
            aniClass: "ani3",
            id: 3
          },
        ]

      }
    },
    methods: {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .box-icon {
    width: 80px;
    height: 80px;
    padding: 15px;
    box-shadow: 1px 2px 4px 0px #8c8c8c;
    border-radius: 100px;
    margin: 17px;
    background-color: #ff8686;
    z-index: 4;
    cursor: pointer;
    animation-name: example;
    animation-duration: 4s;
    animation-iteration-count: infinite;
  }

  .ani1 {
    animation-delay: 1s;

  }

  .ani2 {
    animation-delay: 0.3s;

  }

  .ani3 {
    animation-delay: 0.7s;

  }

  .box-icon i {
    font-size: 43px;
  }

  @keyframes example {
    0% {
      transform: scale(1);
    }

    50% {
      transform: scale(1.08);
    }

    100% {
      transform: scale(1);
    }
  }

  @media (max-width: 767.98px) {
    .box-icon {
      width: 60px;
      height: 60px;
      padding: 11px;
    }

    .box-icon i {
      font-size: 34px;
      margin-top: 4px;
    }
  }
</style>