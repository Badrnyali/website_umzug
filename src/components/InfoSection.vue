<template>
  <v-row class="d-flex align-center justify-center px-10 py-14 container">
    <v-col cols="12" md="6">
      <v-card class="card-transparent">
        <v-card-text>
          <h2 class="pb-4 heading">
            {{ title }}
          </h2>
          <p class="text-color pb-6">
            {{ description }}
          </p>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" md="6" class="d-flex">
      <v-img
        :srcset="`${image}-w-480.png 480w, ${image}-w-768.png 768w, ${image}-w-1024.png 1024w, ${image}-w-1400.png 1399w`"
        :src="image + '.png'"
        class="pl-5"
        min-width="100%"
        contain
      ></v-img>
    </v-col>
  </v-row>
</template>
<script setup lang="ts">
defineProps({
  title: String,
  description: String,
  image: String,
});
</script>
<style scoped>
.card-transparent {
  border: none;
  box-shadow: none !important;
  background-color: inherit;
}
.card-transparent .text-color {
  font-size: 20px;
}
.card-transparent h2 {
  font-size: 28px;
}
</style>
