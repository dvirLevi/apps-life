<template>
  <div v-if="ifShowTitle >= heightTitle" class="row sticky-top anim-title">
    <div class="col">
      <div class="bac-title">
        <Logo size="medium"/>
        <!-- <h1 class="w-100">פיתוח אתרים ואפליקציות</h1> -->
      </div>
    </div>
  </div>
</template>

<script>
  import Logo from '@/components/Logo.vue'

  export default {
    name: 'HideTitle',
    props: ['ifShowTitle'],
    components: {
      Logo
    },
    data() {
      return {
        
      }
    },
    mounted() {
     
    },
    computed: {
      heightTitle() {
        return window.innerHeight;
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
    background: linear-gradient(180deg, #ec9b9b 0%, rgba(255, 255, 255, 0) 100%), #d85f5f;
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
  }

  .anim-title {
    animation-name: example;
    animation-duration: 1s;
  }

  @keyframes example {
    0% {
      opacity: 0;
    }
    100% {
       opacity: 100;
    }
  }
</style>