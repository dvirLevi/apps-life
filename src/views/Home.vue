<template>
  <div>
    <Title/>
    <HideTitle :ifShowTitle="ifShowTitle"/>
    <whatDoes :ifAnim="ifAnim"/>
    <Products/>
    <Contact/>
    <Footer/>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Title from '@/components/Title.vue'
  import HideTitle from '@/components/HideTitle.vue'
  import Products from '@/components/Products.vue'
  import Contact from '@/components/Contact.vue'
  import Footer from '@/components/Footer.vue'
  import whatDoes from '@/components/whatDoes.vue'


  export default {
    name: 'home',
    components: {
      Title,
      HideTitle,
      Products,
      Contact,
      Footer,
      whatDoes
    },
    data(){
      return {
ifShowTitle: "",
ifAnim: ""
      }
    },
    mounted(){
      window.onscroll = () => {
        this.ifShowTitle = document.documentElement.scrollTop;
        this.ifAnim = document.documentElement.scrollTop
      };
    }
  }
</script>
<style scoped>

</style>
