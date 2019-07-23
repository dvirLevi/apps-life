<template>
  <div class="row justify-content-center">
    <p class="title-prod mt-5">הפיתוחים שלנו</p>
    <div class="col-md-4" v-for="product in products" :key="product.id">
      <div class="w-100 center-all">
        <div class="box-prod center-all">
          <img :src="product.img" alt="">
          <p class="center-all">{{product.text}}</p>
          <a :href="product.link">למעבר לאתר/אפליקציה לחץ כאן</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // import Logo from '@/components/Logo.vue'

  export default {
    name: 'Products',
    props: {},
    components: {
      // Logo
    },
    data() {
      return {
        products: [{
            img: require('../assets/send-screen.png'),
            text: "אפליקציה שעושה סדר בסנדוויצ'ים של הילדים",
            link: "https://dvirlevi.github.io/send-app/",
            id: 1
          },
          {
            img: require('../assets/gin-screen.png'),
            text: "אפליקציה לניהול גינה",
            link: "https://gin-apps.herokuapp.com/",
            id: 2
          },
          {
            img: require('../assets/gimatria-screen.png'),
            text: "אפליקציה לחישוב גימטריות עם אפשרות להעתקת הטקסט לשעשועונים וכד'",
            link: "https://dvirlevi.github.io/gimatria-app/",
            id: 3
          },
          {
            img: require('../assets/rambam-screen.png'),
            text: 'מערכת ללווי חוברת חופש לילדים של מרכז מורשת הרמב"ם',
            link: "https://answer-rambam.herokuapp.com/",
            id: 4
          },
          {
            img: require('../assets/rambam-screen2.png'),
            text: 'משחק לפסח עם טבלת שיאים למרכז מורשת הרמב"ם',
            link: "https://gamepessach.herokuapp.com/",
            id: 5
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
.title-prod {
  width: 100%;
  font-family: 'Assistant', sans-serif;
  font-weight: 200;
      font-size: 51px;
}
  .box-prod {
        width: 85%;
    border: solid rgb(241, 241, 241) 1px;
    margin-top: 5%;
    box-shadow: 2px 1px 2px gainsboro;
  }
   .box-prod img{
    height: 177px;
    max-width: 100%;
        margin: 15px
  }
   .box-prod p{
    width: 85%;
    font-family: 'Assistant', sans-serif;
    background-color: rgba(254, 151, 151, 0.15);
        font-size: 21px;
    margin-top: 17px;
    height: 68px;
  }

   .box-prod a{
    font-family: 'Assistant', sans-serif;
    background-color: rgba(254, 161, 161, 1);
        font-size: 21px;
       font-size: 15px;
    padding: 7px;
    margin: 8px;
    font-weight: 800;
    border-radius: 39px;
    cursor: pointer;
    text-decoration: none;
    color: black;
  }

@media (max-width: 767.98px) {
  .box-prod p{
    font-size: 17px;
    height: 101px;
    padding: 18px;
  }
}
      
</style>