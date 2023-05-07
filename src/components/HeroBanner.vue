<template>
  <div>
    <v-img
      class="banner center"
      width="100%"
      cover
      :srcset="`${banner}-w-480.png 480w, ${banner}-w-768.png 768w, ${banner}-w-1024.png 1024w, ${banner}-w-1400.png 1399w`"
      :src="banner + '.png'"
      alt=""
    >
      <div class="overlay"></div>
      <v-row class="hero-info">
        <v-col cols="12" sm="8">
          <v-card class="card pl-6" color="transparent">
            <v-card-text>
              <h1 class="pb-5 heading text-white">
                {{ title }}
              </h1>
              <ul class="pl-0 pb-3">
                <li
                  v-for="(checklist, index) in checkLists"
                  :key="index"
                  class="pb-2 d-flex align-items-center"
                >
                  <img src="/assets/check-circle.svg" class="pr-1 hero-icons" />
                  {{ checklist }}
                </li>
              </ul>
              <CtaButtonVue
                title="Angebot anfordern"
                class="ma-2 ml-0"
                link="/angebot"
              />
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-img>
  </div>
</template>

<script setup lang="ts">
import CtaButtonVue from "./ui-packages/CtaButton.vue";
defineProps({
  banner: String,
  title: String,
  checkLists: Array<String>,
});
</script>
<style>
.banner {
  position: relative;
  height: 520px;
  overflow: hidden;
}
@media screen and (max-width: 800px) {
  .banner {
    height: 380px;
  }
}
@media screen and (max-width: 600px) {
  .banner {
    height: 380px;
  }
}
.overlay {
  left: 0;
  top: 0;
  right: 0;
  height: 100%;
  position: absolute;
  bottom: 0;
  background-color: #00000092;
}
.banner .card {
  box-shadow: none !important;
  color: #fff !important;
}
.hero-info {
  position: absolute;
  left: 0;
  transform: translateY(-50%);
  top: 50%;
}
ul li {
  font-size: 18px;
}
.hero-icons {
  transform: scale(0.9);
}
</style>
