<template>
  <div class="row mt-4">
    <div class="col">
      <p class="title-prod mt-5">יצירת קשר</p>
      <div class="w-100 center-all contact-us">
        <img src="../assets/contact-us.png" alt="">
      </div>
      <h5>רוצים שנפתח לכם אתר או אפליקציה?</h5>
      <h5>דברו איתנו!</h5>
      <IconsContact />
    </div>
  </div>
</template>

<script>
  import IconsContact from '@/components/IconsContact.vue'

  export default {
    name: 'Contact',
    props: {},
    components: {
      IconsContact
    },
    data() {
      return {

      }
    },
    methods: {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .row {
    background-color: rgba(254, 151, 151, 0.15);
    background-image: url(https://www.aspaklaria-studio.co.il/wp-content/uploads/2019/05/dots-black-1.svg);
  }

  .title-prod {
    width: 100%;
    font-family: 'Assistant', sans-serif;
    font-weight: 200;
    font-size: 51px;
    /* color: #000000; */
  }

  h5 {
    margin: 0;
    font-size: 23px;
    /* color: #ffffff; */
  }

  .contact-us img {
    width: 5%;
  }

   @media (max-width: 767.98px) {
     .contact-us img {
    width: 30%;
  }
   }


</style>