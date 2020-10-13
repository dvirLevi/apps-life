<template>
  <div id="myModal" class="modal" :style="{backgroundColor: backgroundColor}">
    <!-- Modal content -->
    <div class="modal-con center">
      <img class="x c-p" src="@/assets/ass36.svg" @click.stop="$emit('customEvent')" alt="">
      <slot></slot>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Modal",
  components: {},
  props: {
    backgroundColor: {
      default: "rgba(0, 0, 0, 0.4)",
      type: String
    }
  },
};
</script>

<style scoped>
/* The Modal (background) */
.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed; /* Stay in place */
  z-index: 1001; /* Sit on top */
  /* padding-top: 100px; Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-con {
  /* background-color: #fff; */
  margin: auto;
  position: relative;
  /* border: 1px solid #888; */
  width: 40%;
  /* border: 3px dashed rgb(82, 82, 82); */
  /* box-shadow: 0px 38px 99px #00000029; */
}

.x {
  position: absolute;
  left: 0;
  top: 0;
  margin: 20px 0px 0px 20px;
}

@media (max-width: 767.98px) {
  .modal-con {
    /* padding: 15px; */
    width: 80%;
  }

  .x {
    width: 15px;
  }
}
</style>
