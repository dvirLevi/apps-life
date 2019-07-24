<template>
  <div class="w-100 center-all">
    <div class="center-all box-icon" :class="icon.aniClass" v-for="icon in icons" :key="icon.id">
      <a :href="icon.link">
        <img class="w-100" :src="icon.img" alt="">
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
        icons:[
          {
            img:require('../assets/whatsapp.png'),
            link:"https://api.whatsapp.com/send?phone=972545993678",
            aniClass: "ani1",
            id:1
          },
           {
            img:require('../assets/phon2.png'),
            link:"tel:0545993678",
            aniClass: "ani2",
            id:2
          },
           {
            img:require('../assets/gmail.png'),
            link:"mailto:dvirleviapp@gmail.com",
            aniClass: "ani3",
            id:3
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
    background-color: #fdfaf2;
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

   .box-icon {
    cursor: pointer;
    animation-name: example;
    animation-duration: 4s;
    animation-iteration-count: infinite;
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
.box-icon{
  width: 60px;
    height: 60px;
    padding: 11px;
}
}
      
</style>