<template>
  <v-footer color="lighten-1" class="px-14 pb-4" padless>
    <v-row class="d-flex justify-space-between" no-gutters>
      <div class="d-flex flex-column">
        <v-list>
          <v-list-item
            v-for="(link, index) in links"
            class="py-0"
            text
            :key="index"
          >
            <v-list-item-title class="py-0">{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </div>
      <div class="primary lighten-2 py-4 text-left white--text" cols="12">
        <p><span class="footer-text">TUK</span>S GmbH</p>
        <address>Hauptstrasse 10</address>
        <address>91052 Erlangen</address>
        <p><span>Tel:</span><a href="tel: 0178888888">0178888888</a></p>
      </div>
    </v-row>
  </v-footer>
</template>
<script setup lang="ts">
import { reactive } from "vue";

const links = reactive([
  {
    text: "Impressum",
    link: "s",
  },
  {
    text: "Datenschutz",
    link: "",
  },
]);
</script>
<style scoped>
.v-footer {
  background-color: #000000b3;
  color: #fff;
}
.v-footer .v-list {
  background-color: transparent;
  color: #fff;
}
.v-footer .footer-text {
  color: rgb(92 229 38);
}
</style>
