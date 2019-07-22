<template>
  <div>
    <Title/>
    <HideTitle/>
    <Products/>
    <Contact/>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Title from '@/components/Title.vue'
  import HideTitle from '@/components/HideTitle.vue'
  import Products from '@/components/Products.vue'
  import Contact from '@/components/Contact.vue'


  export default {
    name: 'home',
    components: {
      Title,
      HideTitle,
      Products,
      Contact,
    }
  }
</script>
<style scoped>

</style>
