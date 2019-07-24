<template>
  <div class="row mt-4">
    <div class="col">
      <p class="title-prod mt-5">מה אנחנו עושים?</p>
      <!-- <h5>רוצים שנפתח לכם אתר או אפליקציה?</h5> -->
      <!-- <h5>דברו איתנו!</h5> -->
      <!-- <IconsContact /> -->
      <!-- <ul>
        <li>פיתוח אפליקציות לווב ולמובייל</li>
        <li>בניית אתרי one page</li>
        <li>בניית דפי נחיתה</li>
      </ul> -->
      <div class="w-100 center-all">
        <div class="box-what center-all" v-for="item in does" :key="item.id">
          <div class="w-100 center-all">
            <img :src="item.img" alt="">
          </div>
          <h2>{{item.title}}</h2>
          <p>{{item.text}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // import IconsContact from '@/components/IconsContact.vue'

  export default {
    name: 'whatDoes',
    props: {},
    components: {

    },
    data() {
      return {
        does:[{
          title: "פיתוח אפליקציות לווב",
          text: "מערכות ואפליקציות שנמצאות על רשת האינטרנט ונגישות לכל מי שתרצו ברחבי העולם",
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
        },]

      }
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
        height: 361px;
        padding: 10px
  }

   .box-what p{
   font-size: 21px;
   
  }

   .box-what img{
   width: 50%;
   
  }
  @media (max-width: 767.98px) {
    .box-what {
    width: 90%;
  }
  .box-what img{
   width: 70%;
   
  }
  }
</style>