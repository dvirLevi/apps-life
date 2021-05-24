<template>
  <div ref="boxWhat" class="box-what f-center-top p-3">
    <div class="w-100 center-all">
      <!-- <img :src="item.img" alt="" :style="{transform: `rotate(${namAnim}deg) scale(${namAnimScale})`, opacity: namAnimScale }"> -->
      <img :src="item.img" alt="">
    </div>
    <h2 class="mt-3">{{item.title}}</h2>
    <p class="mt-2">{{item.text}}</p>
  </div>

</template>

<script>
  // import IconsContact from '@/components/IconsContact.vue'

  export default {
    name: 'whatDoesBox',
    props: ['item', 'ifAnim'],
    components: {

    },
    data() {
      return {
        topBox: "",
      }
    },
    mounted() {
      this.topBox = this.$refs.boxWhat.offsetTop - 10;
    },
    computed: {
      namAnim() {
        if (this.ifAnim - this.topBox < 360 ) {
          return this.ifAnim - this.topBox;
        }
        return 0
      },
      namAnimScale() {
        if (this.ifAnim - this.topBox < 359 ) {
          let x = this.ifAnim - this.topBox;
          let y = x / 3.6;
          return '0.' + y.toFixed(0);
        }
        return 1
      },
    },
    methods: {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .row {
    background-color: #f3de80;
  }

  .title-prod {
    width: 100%;
    font-family: 'Assistant', sans-serif;
    font-weight: 200;
    font-size: 51px;
  }

  .box-what {
    width: 20%;
    background-color: #efd76d;
    box-shadow: 1px 1px 3px #82828259;
    margin: 30px;
    height: 320px;
    padding: 10px
  }
.box-what h2 {
   font-weight: 800;

  }
  .box-what p {
    font-size: 21px;

  }

  .box-what img {
        height: 121px;

  }

  @media (max-width: 767.98px) {
    .box-what {
      width: 90%;
    }

    .box-what img {
      width: 70%;

    }
  }
</style>