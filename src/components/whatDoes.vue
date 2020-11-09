<template>
  <div id="scrollEl" class="row">
    <div class="col">
      <p class="title-prod mt-5">מה אנחנו עושים?</p>
      <div class="w-100 center-all">
        <whatDoesBox v-for="item in does" :key="item.id" :item="item" :ifAnim="ifAnim" />
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
  .row {
    background-color: #f3de80;
    /* margin-top: -50px */
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
    /* box-shadow: 1px 1px 3px #82828259; */
    border-radius: 20px;
    margin: 30px;
    height: 361px;
    padding: 10px
  }

  .box-what p {
    font-size: 21px;
    
  }

  .box-what img {
    width: 50%;
  }

  @media (max-width: 767.98px) {
    .row {
      /* margin-top: -58px */
    }

    .box-what {
      width: 90%;
      height: auto;
    }

    .box-what img {
      width: 70%;
    }
  }
</style>