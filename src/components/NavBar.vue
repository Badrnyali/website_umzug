<template>
  <div>
    <v-app-bar color="white px-4 py-1" dense dark>
      <div class="logo center">
        <router-link to="/">
          <v-img
            src="assets/logo.png"
            width="50"
            height="50"
          ></v-img>
        </router-link>
      </div>
      <v-spacer></v-spacer>
      <CtaButton title="Angebot anfordern" link="/angebot" />
    </v-app-bar>
  </div>
</template>

<script setup lang="ts">
import CtaButton from "./ui-packages/CtaButton.vue";
</script>
<style scoped>
.v-toolbar .logo {
  width: 120px;
  height: 120px;
}
</style>
