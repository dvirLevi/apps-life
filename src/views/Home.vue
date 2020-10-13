<template>
  <div>
    <Title />
    <HideTitle :ifShowTitle="ifShowTitle" />
    <whatDoes :ifAnim="ifAnim" />
    <Products />
    <Contact />
    <Footer />
    <modalContact v-if="ifShowModal" @closeModal="ifShowModal = !ifShowModal" />
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
  import modalContact from '@/components/modalContact.vue'


  export default {
    name: 'home',
    components: {
      Title,
      HideTitle,
      Products,
      Contact,
      Footer,
      whatDoes,
      modalContact
    },
    data() {
      return {
        ifShowTitle: "",
        ifAnim: "",
        ifShowModal: false
      }
    },
    mounted() {
      window.onscroll = () => {
        this.ifShowTitle = document.documentElement.scrollTop;
        this.ifAnim = document.documentElement.scrollTop
      };

      setTimeout(() => {
        this.ifShowModal = true;
      }, 10000)
    }
  }
</script>
<style scoped>

</style>