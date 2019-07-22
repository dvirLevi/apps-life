<template>
  <div class="row">
    <div class="col">
      <p class="title-prod mt-5">יצירת קשר</p>
      <IconsContact/>
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
.title-prod {
  width: 100%;
  font-family: 'Assistant', sans-serif;
  font-weight: 200;
      font-size: 51px;
}

</style>