<template>
  <div>
    <v-btn class="cta_button" :to="link" outlined>{{ title }}</v-btn>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: String,
  link: String,
});
</script>
<style>
.cta_button {
  background-color: rgb(92 229 38) !important;
  color: #000;
}
.cta_button:hover {
  background-color: rgba(100, 239, 45);
  transform: scale(1.02);
  transition: All 0.3s ease-in;
}
</style>
