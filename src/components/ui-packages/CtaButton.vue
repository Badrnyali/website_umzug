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
