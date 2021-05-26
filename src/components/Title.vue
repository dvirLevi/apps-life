<template>
  <div class="row">
    <div class="col">
      <div class="bac-title position-relative f-center" :style="{height: heightTitle + 'px' }">
        <div class="icons-contact w-100">
          <IconsContact />
        </div>
        <Logo size="large" class="zindex" />
        <!-- <h2 class="w-100 zindex">פיתוח אתרים ואפליקציות</h2> -->
        <vue-particles color="#4b383b" :particleOpacity="0.7" :particlesNumber="80" shapeType="circle" :particleSize="4"
          linesColor="#4b383b" :linesWidth="1" :lineLinked="true" :lineOpacity="0.4" :linesDistance="150" :moveSpeed="3"
          :hoverEffect="true" hoverMode="grab" :clickEffect="true" clickMode="push"></vue-particles>
      </div>
      <div class="w-100 p-3 arrow">
        <!-- <img @click="scroll()" src="../assets/arrow.png" alt=""> -->
        <i class="fas fa-chevron-down" @click="scroll()"></i>
      </div>
    </div>
  </div>
</template>

<script>
  import Logo from '@/components/Logo.vue'
  import IconsContact from '@/components/IconsContact.vue'

  export default {
    name: 'Title',
    props: {},
    components: {
      Logo,
      IconsContact
    },
    computed: {
      heightTitle() {
        return window.innerHeight - 80;
      }
    },
    methods: {
      scroll() {
        let element = document.getElementById("scrollEl");
              element.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest"
              });
        // window.scrollTo(0, window.innerHeight + 2)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .col {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }

  .bac-title {
    width: 100%;
    /* background: linear-gradient(180deg, #F7BABA 0%, rgba(255, 255, 255, 0) 100%), #d85f5f; */
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .bac-title h2 {
    /* font-family: 'Assistant', sans-serif;
    font-size: 48px;
    font-weight: 200; */
        /* font-family: Assistant,sans-serif; */
    font-size: 32px;
    font-weight: 200;
    padding-left: 12px;
}

.icons-contact {
  position: absolute;
  top: 0;
}
  

  .zindex {
    position: relative;
    z-index: 2;
  }

  .arrow {
    height: 80px;
  }

  .arrow img {
    cursor: pointer;
    animation-name: example;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }

  .arrow i {
    color: #e05c5c;
    font-size: 68px;
    cursor: pointer;
    animation-name: example;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }

  @keyframes example {
    0% {
      margin-top: -10px;
    }

    50% {
      margin-top: 5px;
    }

    100% {
      margin-top: -10px;
    }
  }
 @media (max-width: 767.98px) {
 .bac-title h2 {
  font-size: 23px;
    padding-left: 46px;
  }
 
 }
     
</style>