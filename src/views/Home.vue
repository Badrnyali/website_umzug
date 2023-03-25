<template>
  <nav>
    <NavBar />
  </nav>
  <HeroBanner
    :banner="Home.hero.banner"
    :title="Home.hero.title"
    :checkLists="Home.hero.checkLists"
  />
  <InfoSection
    :title="Home.info.title"
    :description="Home.info.description"
    :image="Home.info.image"
  />
  <Services />
  <FormContainer />
  <FooterSection />
</template>

<script setup lang="ts">
import NavBar from "../components/NavBar.vue";
import HeroBanner from "../components/HeroBanner.vue";
import InfoSection from "../components/InfoSection.vue";
import FormContainer from "../components/FormContainer.vue";
import FooterSection from "../components/FooterSection.vue";
import Services from "../components/ServicesSection.vue";
import FeatureSection from "../components/FeatureSection.vue";
import { Home } from "../texte.ts";
</script>
