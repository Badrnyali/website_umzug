<template>
  <div class="pt-12 pb-14 services-container">
    <v-row class="d-flex align-center justify-center">
      <v-col cols="8" class="text-center">
        <h2 class="heading pb-2">Unsere Services</h2>
        <p class="text-color pb-4">
          Mit TUKS haben Sie Ihren Partner für professionelle Umzüge gefunden.
          Wir bieten Ihnen die volle Bandbreite an Service und Leistungen im
          Bereich der Umzug.
        </p>
      </v-col>
    </v-row>
    <v-row class="d-flex align-center justify-center">
      <v-col cols="11">
        <ul class="service-lists pl-0 pb-6">
          <Infosbutton text="Privatumzug" link="/service/privat" />
          <Infosbutton text="Firmenumzug" link="/service/firma" />
          <Infosbutton text="Senioren Umzug" link="/service/senioren" />
          <Infosbutton text="Sperrmüllentsorgung" link="/service/muell" />
          <Infosbutton
            text="Wohnungsauflösung"
            link="/service/wohnungsaufloesung"
          />
          <Infosbutton
            icon="mdi-account"
            text="Fernumzug"
            link="/service/internationale"
          />
        </ul>
      </v-col>
    </v-row>
  </div>
</template>
<script setup lang="ts">
import Infosbutton from "../components/ui-packages/InfosButton.vue";
</script>
<style>
.service-lists {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}
@media screen and (max-width: 974px) {
  .service-lists {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 767px) {
  .service-lists {
    grid-template-columns: repeat(1, 1fr);
  }
}

.services-container .text-color {
  font-size: 20px;
}
.services-container h2 {
  font-size: 28px;
}
</style>
