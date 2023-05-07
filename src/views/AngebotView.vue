<template>
  <NavBar />
  <div class="angebot-container">
    <div class="overlay"></div>
    <v-row class="pt-16 px-14">
      <v-col cols="12" class="pt-6 text-center angebot-text">
        <h1 class="heading pb-3">Angebot anfordern</h1>
        <h3>Jetzt in wenigen Schritten Ihren Umzug planen & reservieren</h3>
      </v-col>
      <v-card class="card-angebot mt-8 pt-14">
        <v-form v-show="!sendRequest" ref="formRef">
          <AngebotTimeline class="d-none d-sm-flex" :active="showForm" />
          <div class="data-form" v-show="showForm === 1">
            <v-row class="form-fields">
              <v-col col="12"
                ><v-text-field
                  v-model="data.vorname"
                  label="Vorname"
                ></v-text-field>
              </v-col>
              <v-col col="12"
                ><v-text-field
                  v-model="data.nachname"
                  label="Nachname"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row class="form-fields">
              <v-col col="12">
                <v-text-field
                  v-model="data.email"
                  label="E-mail*"
                  ref="emailRef"
                  @keyup="onValidate"
                  required
                ></v-text-field>
              </v-col>
              <v-col col="12">
                <v-text-field
                  v-model="data.telefon"
                  label="Telefon"
                ></v-text-field>
              </v-col>
            </v-row>
          </div>
          <div class="umzugsinfo-form" v-show="showForm === 2">
            <v-row class="form-fields">
              <v-col col="12" class="align-self-center">
                <input
                  type="date"
                  class="pl-3 w-100 date-input"
                  v-model="data.umzugstermin"
                />
              </v-col>
              <v-col col="12"> </v-col>
            </v-row>
            <v-row class="form-fields d-flex justify-space-between mb-5 mt-3">
              <StaedteBayernInputVue @ladeStelle="getData" />
            </v-row>
          </div>
          <v-row>
            <v-col col="12">
              <CtaButtonVue
                title="Weiter"
                class="float-right"
                v-show="showForm === 1"
                @click="weiterForm"
              />
              <CtaButtonVue
                title="Zurück"
                class="float-left"
                v-show="showForm === 2"
                @click="showForm = 1"
              />
              <CtaButtonVue
                title="Senden"
                class="float-right"
                type="submit"
                v-show="showForm === 2"
                @click="submitForm"
              />
            </v-col>
          </v-row>
        </v-form>
        <template v-if="sendRequest">
          <v-row>
            <Transition>
              <v-col cols="12" class="pt-0"
                ><v-alert dense type="success">
                  Ihre Anfrage wurde gesendet! Wir werden Ihnen bald
                  kontaktiere.
                </v-alert>
              </v-col>
            </Transition>
          </v-row>
        </template>
      </v-card>
    </v-row>
  </div>
</template>
<script setup lang="ts">
import NavBar from "../components/NavBar.vue";
import AngebotTimeline from "../components/AngebotTimeline.vue";
import CtaButtonVue from "../components/ui-packages/CtaButton.vue";
import StaedteBayernInputVue from "../components/StaedteBayernInput.vue";
import { onMounted, reactive, ref } from "vue";
import emailjs from "emailjs-com";
import type { LadeData } from "../interfaces";

const showForm = ref();
const sendRequest = ref(false);
const emailInvalid = ref<boolean>(false);
const formRef = ref();
const emailRef = ref();

onMounted(() => {
  showForm.value = 1;
});

const data: any = reactive({
  vorname: "",
  nachname: "",
  email: "",
  telefon: "",
  umzugstermin: new Date().toISOString().split("T")[0],
  beladestelle: "",
  entladestelle: "",
});

const onValidate = () => {
  if (/.+@.+/.test(data.email)) {
    emailInvalid.value = false;
  } else {
    emailInvalid.value = true;
  }
};
const getData = (ladedata: LadeData): any => {
  data.beladestelle = ladedata.beladestelle;
  data.entladestelle = ladedata.entladestelle;
};

const weiterForm = () => {
  if (!emailInvalid.value) {
    return (showForm.value = 2);
  }
  emailRef.value.$el.classList.add("email-invalid");
  window.setTimeout(() => {
    emailRef.value.$el.classList.remove("email-invalid");
  }, 1000);
};

const submitForm = () => {
  sendRequest.value = true;
  emailjs
    .send(
      import.meta.env.VITE_SERVICEID,
      import.meta.env.VITE_TEMPLATEID,
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
.angebot-container {
  min-height: 100vh;
  position: relative;
  background-image: url("/assets/Banner-2.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.angebot-container .overlay {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.957) 0%,
    rgba(255, 255, 255, 0) 100%
  );
}
.angebot-container .v-field__field {
  background-color: #fff;
}
.angebot-container .angebot-text {
  color: #fff;
  z-index: 10;
}
.angebot-container .angebot-text h1 {
  font-size: 48px;
}
.angebot-container .angebot-text h3 {
  font-size: 24px;
}
.angebot-container .card-angebot {
  position: relative;
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
  padding: 30px 40px;
  -webkit-box-shadow: 0px 0px 7px 6px rgba(0, 0, 0, 0.73);
  box-shadow: 0px 0px 7px 6px rgba(0, 0, 0, 0.73);
  overflow: initial;
}
.angebot-container .card-angebot .email-invalid {
  color: red;
}
.angebot-container .card-angebot .timeline {
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
}
.date-input {
  color: inherit;
  display: flex;
  flex-wrap: wrap;
  min-height: var(--v-input-control-height, 56px);
  padding-left: 12px;
  width: 100%;
  min-width: 0;
  border-bottom: 1px solid rgb(118 118 118 / 56%);
  opacity: var(--v-high-emphasis-opacity);
}
@media screen and (max-width: 480px) {
  .form-fields {
    display: flex;
    flex-direction: column;
  }
}
</style>
