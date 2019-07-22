<template>
  <div class="w-100 center-all">
    <div class="center-all box-icon" v-for="icon in icons" :key="icon.id">
      <a :href="icon.link">
        <img class="w-100" :src="icon.img" alt="">
      </a>
    </div>
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
            link:"https://api.whatsapp.com/send?phone=0545993678",
            id:1
          },
           {
            img:require('../assets/phon2.png'),
            link:"tel:0545993678",
            id:2
          },
           {
            img:require('../assets/gmail.png'),
            link:"mailto:dvirleviapp@gmail.com",
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
        width: 4%;
    padding: 11px;
    box-shadow: 1px 2px 4px 0px #8c8c8c;
    border-radius: 100px;
    margin: 17px;
  }
@media (max-width: 767.98px) {
.box-icon{
  width: 20%;
    padding: 11px;
    -webkit-box-shadow: 1px 2px 4px 0px #8c8c8c;
    box-shadow: 1px 2px 4px 0px #8c8c8c;
    border-radius: 100px;
    margin: 17px;
}
}
      
</style>