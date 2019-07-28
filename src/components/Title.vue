<template>
  <div class="row">
    <div class="col">
      <div class="bac-title position-relative" :style="{height: heightTitle + 'px' }">
        <div class="position-absolute w-100">
        <IconsContact/>
        </div>
        <Logo size="large"/>
        <h1 class="w-100">פיתוח אתרים ואפליקציות</h1>
      </div>
      <div class="w-100 p-3 arrow">
        <img @click="scroll()" src="../assets/arrow.png" alt="">
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
    methods:{
      scroll(){
        window.scrollTo(0, window.innerHeight + 2)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.col{
       padding-right: 0 !important;
       padding-left: 0 !important;
}
  .bac-title {
    width: 100%;
        background: linear-gradient(180deg, #F7BABA 0%, rgba(255, 255, 255, 0) 100%), #d85f5f;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .bac-title h1 {
    font-family: 'Assistant', sans-serif;
    font-size: 48px;
    font-weight: 200;
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
</style>