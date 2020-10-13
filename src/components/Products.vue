<template>
  <div class="row justify-content-center">
    <p class="title-prod mt-5">פיתוחים שלנו</p>
    <div class="col-md-4" v-for="product in products" :key="product.id">
      <div class="w-100 center-all">
        <a class="box-prod center-all" :href="product.link" target="_blanc">
          <img :src="product.img" alt="">
          <p class="center-all p-2">{{product.text}}</p>
          <!-- <a :href="product.link" target="_blanc">למעבר לאתר/אפליקציה לחץ כאן</a> -->
        </a>
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
        products: [
            {
            img: require('../assets/ass1.jpg'),
            text: "אתר שיבולת",
            link: "https://www.shiboletpress.com/",
            id: 7
          },
          {
            img: require('../assets/ass2.jpg'),
            text: "חנות לשיווק ומכירת תנורי נאפולי",
            link: "https://www.napoli-oven.co.il",
            id: 0
          },
          {
            img: require('../assets/ass3.jpg'),
            text: "אתר חדשות המשק",
            link: "https://www.meshekil.com/",
            id: 7
          },
          {
            img: require('../assets/ass4.jpg'),
            text: "שמריהו - חנות למכירת אדניות בוטיק",
            link: "https://shemaryahu.com/",
            id: 10
          },
          
          {
            img: require('../assets/leda.png'),
            text: "אתר מתקוננת להריון ולידה",
            link: "https://www.mitkonenet.com",
            id: 2
          },
          {
            img: require('../assets/time-screen.png'),
            text: "אפליקצית זמני היום",
            link: "https://kash-bezmana.netlify.com/",
            id: 6
          },
          //  {
          //   img: require('../assets/shopil-screen.png'),
          //   text: "אתר קונים ישראלי",
          //   link: "https://shop-il.netlify.app/",
          //   id: 8
          // },
          // {
          //   img: require('../assets/rambam-screen.png'),
          //   text: 'מערכת לווי לחוברת חופש של מרכז מורשת הרמב"ם',
          //   link: "https://answer-rambam.herokuapp.com/",
          //   id: 4
          // },
          // {
          //   img: require('../assets/gin-screen.png'),
          //   text: "אפליקציה לניהול גינה",
          //   link: "https://gin-apps.herokuapp.com/",
          //   id: 1
          // },
          // {
          //   img: require('../assets/send-screen.png'),
          //   text: "אפליקציה שעושה סדר בסנדוויצ'ים של הילדים",
          //   link: "https://dvirlevi.github.io/send-app/",
          //   id: 2
          // },
          // {
          //   img: require('../assets/gimatria-screen.png'),
          //   text: "אפליקציה לחישוב גימטריות עם אפשרות להעתקת הטקסט לשעשועונים וכד'",
          //   link: "https://dvirlevi.github.io/gimatria-app/",
          //   id: 3
          // },
          // {
          //   img: require('../assets/emoji-screen.png'),
          //   text: "משחק אימוג'ים",
          //   link: "https://imoji-game.herokuapp.com/",
          //   id: 9
          // },
          // {
          //   img: require('../assets/rambam-screen2.png'),
          //   text: 'משחק לפסח עם טבלת שיאים למרכז מורשת הרמב"ם',
          //   link: "https://gamepessach.herokuapp.com/",
          //   id: 5
          // },
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
    /* border: solid rgb(241, 241, 241) 1px; */
    margin-top: 5%;
        box-shadow: 1px 1px 20px #dcdcdc63;
    border-radius: 20px;
  }

  .box-prod img {
    height: 177px;
    max-width: 100%;
    margin: 15px
  }

  .box-prod p {
       width: 85%;
    font-family: 'Assistant', sans-serif;
    font-weight: 300;
    background-color: rgb(224 92 92);
    border-radius: 10px;
    color: #fff;
    font-size: 21px;
    margin-top: 17px;
    min-height: 68px;
  }

  .box-prod a {
    font-family: 'Assistant', sans-serif;
    background-color: rgba(254, 161, 161, 1);
    font-size: 18px;
    padding: 7px;
    margin: 28px 0px;
    font-weight: 800;
    /* border-radius: 39px; */
    cursor: pointer;
    text-decoration: none;
    color: black;
  }

  @media (max-width: 767.98px) {
    .box-prod p {
      font-size: 21px;
      min-height: 59px;
      padding: 18px;
    }
  }
</style>