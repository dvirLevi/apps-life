<template>
  <div>
    <Modal backgroundColor="#00000000" @customEvent="$emit('closeModal')">
      <div class="w-100 h-100 f-center wrap-modal p-4">
        <form class="in-box" @submit.prevent="sendMail">
          <h3>תנו לנו להגשים לכם את החלום!</h3>
          <h5>השאירו פרטים וניצור אתכם קשר בהקדם</h5>
          <input type="text" placeholder="*שם" v-model="data.name" required>
          <!-- <input type="email" placeholder="מייל" v-model="data.email"> -->
          <input type="tel" pattern="[0-9]+" minlength="9" maxlength="11" placeholder="*טלפון" v-model="data.tel">
          <textarea v-model="data.comment" cols="30" rows="4" placeholder="בא לך להרחיב? בכיף :)"></textarea>
          <buttonLink class="rounded-pill button-link" :fontWeight="400" backColor="#e05c5c" backColorHov="#e44e4e"
            type="submit">{{textSend}}</buttonLink>
        </form>
        <div class="in-box f-center">
          <img class="w-75 desktop" src="@/assets/ass5.svg" alt="">
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
  // @ is an alias to /src

  import Modal from '@/components/Modal.vue'
  import buttonLink from '@/components/buttonLink.vue'
  import myMail from '@/helpers/myMail.js'


  export default {
    name: 'modalContact',
    components: {
      Modal,
      buttonLink
    },
    data() {
      return {
        textSend: "שלח, לא תתחרט",
        data: {}
      }
    },
    methods: {
      async sendMail() {
        if (this.textSend === "שלח, לא תתחרט") {
          this.textSend = "המתן..."
          await myMail.sendToMail(this.data, null, "יצירת קשר appsLife");
          this.textSend = "שלח, לא תתחרט"
        }
      }
    },
  }
</script>
<style scoped>
  .wrap-modal {
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 0 0 15px #0000001a;
    text-align: right;
  }

  .in-box {
    width: 50%;
  }

  input,
  textarea,
  .button-link {
    width: 100%;
    margin-top: 20px;
    border: solid #BEBEBE 1px;
    border-radius: 25px;
    padding: 10px;
    outline: none;
  }

  @media (max-width: 767.98px) {
    .in-box {
      width: 100%;
    }
  }
</style>