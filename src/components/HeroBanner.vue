<template>
  <div class="banner center">
    <div class="overlay"></div>
    <v-row>
      <v-col cols="12" sm="6">
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
  background-image: v-bind(banner);
  min-height: 520px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.banner .overlay {
  left: 0;
  top: 0;
  right: 0;
  height: 100%;
  position: absolute;
  bottom: 0;
  background-color: #00000080;
}
.banner .card {
  box-shadow: none !important;
  color: #fff !important;
}
ul li {
  font-size: 18px;
}
.hero-icons {
  transform: scale(0.9);
}
</style>
