<template>
  <div class="form-container px-14 container">
    <v-row class="d-flex align-center justify-center px-6 pl-0 py-10">
      <v-col cols="12" v-show="!submited">
        <form color="white" class="form">
          <h2 class="mb-5">Ihre Nachricht an uns:</h2>
          <v-text-field v-model="data.name" label="Name"></v-text-field>
          <v-text-field
            v-model="data.email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
          <v-text-field v-model="data.telefon" label="Telefon"></v-text-field>
          <v-textarea
            v-model="data.nachricht"
            label="Ihre Nachricht"
            required
          ></v-textarea>
          <CtaButtonVue
            title="Submit"
            class="ml-0 w-30"
            link="#"
            @click="submit()"
          />
        </form>
      </v-col>
      <Transition>
        <v-col cols="12" sm="6" v-if="submited"
          ><v-alert dense type="success">
            Ihre Nachricht wurde gesendet! Wir werden Ihnen bald kontaktiere.
          </v-alert>
        </v-col>
      </Transition>
    </v-row>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue";
import CtaButtonVue from "./ui-packages/CtaButton.vue";
import emailjs from "emailjs-com";

const data = reactive({
  email: "",
  nachricht: "",
  telefon: "",
  name: "",
});
const submited = ref(false);
const emailRules = ref([
  (v: any) => !!v || "E-mail is required",
  (v: any) => /.+@.+/.test(v) || "E-mail must be valid",
]);

const submit = () => {
  submited.value = true;
  emailjs
    .send(
      import.meta.env.VITE_SERVICEID,
      import.meta.env.VITE_TEMPLATE2ID,
      data,
      import.meta.env.VITE_PUBLICKEY
    )
    .then(
      (result) => {
        console.log("SUCCESS!", result.text);
      },
      (error) => {
        console.log("FAILED...", error.text);
      }
    );
};
</script>
<style>
.form .v-field__field {
  background-color: #ffffffcd;
}
.form .v-btn {
  color: #000;
  font-size: 16px;
  padding: 15px 20px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25%;
}
.form .v-enter-active,
.form .v-leave-active {
  transition: opacity 0.5s ease;
}

.form .v-enter-from,
.form .v-leave-to {
  opacity: 0;
}
</style>
