<template>
  <NavBar />
  <HeroBanner
    :banner="serviceObject.hero.banner"
    :title="serviceObject.hero.title"
    :checkLists="serviceObject.hero.checkLists"
  />
  <div class="service-info">
    <InfoSection
      :title="serviceObject.info.title"
      :description="serviceObject.info.description"
      :image="serviceObject.info.image"
    />
  </div>
  <FormContainer />
  <FooterSection />
</template>

<script setup lang="ts">
import { reactive } from "vue";
import NavBar from "../components/NavBar.vue";
import HeroBanner from "../components/HeroBanner.vue";
import InfoSection from "../components/InfoSection.vue";
import FooterSection from "../components/FooterSection.vue";
import FormContainer from "../components/FormContainer.vue";
import { useRoute } from "vue-router";
import { Services } from "../texte";
import type { IServices } from "../texte";

const route = useRoute();
const id = route.params.id;
const serviceObject = reactive<IServices>(Services[id]);
</script>
<style scoped>
.service-info .container {
  background-color: #fff !important;
}
.service-info .card-transparent {
  background-color: #fff !important;
}
</style>
