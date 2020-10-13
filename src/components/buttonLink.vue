<template>
  <div class="my-button c-p" @click.stop="$emit('customEvent')" @mouseover="hovColor" @mouseout="outHovColor"
    :style="{backgroundColor: selectRoute}">
    <router-link  v-if="link" class="" tag="button" :to="link" :style="{color: textColor, fontWeight: fontWeight}">
      <slot></slot>{{text}}
    </router-link>
    <button  :type="type" :form="formId" class="" v-else :style="{color: textColor, fontWeight: fontWeight}">
      <slot></slot>{{text}}
    </button>
    <div class="placeholder" :style="{fontWeight: fontWeight}">
      <slot></slot>{{text}}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'buttonLink',
    props: {
      link: String,
      text: String,
      formId: String,
      type: {
        type: String,
        default: 'submit'
      },
      backColor: {
        type: String,
        default: '#000000'
      },
      backColorHov: {
        type: String,
        default: '#404040'
      },
      textColor: {
        type: String,
        default: '#fff'
      },
      selectRouteColor: {
        type: String,
        default: '#000000'
      },
      fontWeight: {
          type: Number,
        default: 400
      }
    },
    data() {
      return {
        dynamicbackColor: "",
        // paddingButt: 0
      }
    },
    mounted() {
      this.dynamicbackColor = this.backColor;
      // this.paddingButt = window.getComputedStyle(this.$refs.wrapButt).padding;
    },
    methods: {
      hovColor() {
        this.dynamicbackColor = this.backColorHov
      },
      outHovColor() {
        this.dynamicbackColor = this.backColor
      }
    },
    computed: {
      selectRoute() {
        if (this.link === this.$route.path && this.selectRouteColor) {
          return this.selectRouteColor
        }
        return this.dynamicbackColor
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .my-button {
    font-weight: 400;
    position: relative;
    text-align: center;
  }

  button {
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background-color: rgba(255, 255, 255, 0);
    /* padding: 0px; */
    padding: inherit;
  }

  .placeholder {
    color: transparent;
    opacity: 0;
    pointer-events: none;
  }


  @media (max-width: 767.98px) {
   
  }

</style>
