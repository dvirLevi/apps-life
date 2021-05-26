<template>
  <div id="scrollEl" class="row">
    <div class="col">
      <p class="title-prod mt-5 mb-5">מה אנחנו עושים?</p>
      <!-- <div class="w-100 center-all">
        <whatDoesBox v-for="item in does" :key="item.id" :item="item" :ifAnim="ifAnim" />
      </div> -->
      <div class="row pb-5">
        <img class="wave" src="@/assets/ass3.svg" alt="">
        <!-- <img class="wave-up" src="@/assets/ass4.svg" alt=""> -->
        <div class="container">
          <div class="row">
            <div class="col-md-8 order-md-0 order-1 text-right">
              <h1 class="font-weight-bolder mt-md-0 mt-5">פיתוח מערכות web ואתרים</h1>
              <p>פיתוח מערכות </p>
            </div>
            <div class="col-md-4 order-md-1 order-0">
              <img src="@/assets/ass2.svg" alt="">
            </div>
            <!-- <div class="col-md-1"></div> -->
          </div>
          <div class="row">
            <!-- <div class="col-md-1"></div> -->
            <div class="col-md-8"></div>

            <div class="col-md-4">
              <img src="@/assets/ass1.svg" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import whatDoesBox from '@/components/whatDoesBox.vue'

  export default {
    name: 'whatDoes',
    props: ['ifAnim'],
    components: {
      whatDoesBox
    },
    data() {
      return {
        does: [{
            title: "פיתוח אפליקציות ווב",
            text: "מערכות אפליקציות וחנויות שנמצאות על גבי רשת האינטרנט ונגישות לכל מי שתרצו ברחבי העולם",
            img: require('../assets/web.png'),
            id: 1
          },
          {
            title: "פיתוח אפליקציות מותאמות למובייל",
            text: "פיתוח אפליקציות היברידיות שמותאמות לכל הפלטפורמות",
            img: require('../assets/mobile.png'),
            id: 2
          },
          {
            title: "פיתוח אתרי One-page ודפי נחיתה ",
            text: "פיתוח אתר תדמית או דף נחיתה לשיווק עסק או כל דבר אחר שתרצה",
            img: require('../assets/one-page.png'),
            id: 3
          },
        ],

      }
    },
    mounted() {

    },
    methods: {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .title-prod {
    width: 100%;
    font-family: 'Assistant', sans-serif;
    font-weight: 200;
    font-size: 51px;
  }

  .wave {
    position: absolute;
    width: 100%;
    bottom: 0;

  }

  @media (max-width: 767.98px) {
    img {
      width: 50%;
    }

  }
</style>