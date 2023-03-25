<template>
  <li
    class="ml-5 mr-5 d-flex align-center justify-center"
    @click="router.push(link ?? '/angebot')"
  >
    {{ text }}
    <div class="d-flex services-icon">
      <img src="/assets/arrow-right.svg" />
    </div>
  </li>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();

defineProps({
  icon: String,
  text: String,
  link: String,
});
</script>

<style scoped>
li {
  position: relative;
  font-size: 18px;
  background-color: #f1f2f4;
  color: #535353;
  font-weight: 700;
  padding: 1em;
  border-radius: 8px;
  transition: 0.3s ease-in-out;
  width: 49%;
  cursor: pointer;
}
li:hover {
  box-shadow: 0px 0px 3px 0px #b2b3b5;
}
li:hover .services-icon {
  right: -19px;
  box-shadow: 0px 0px 6px 0px #4caf50;
}
.services-icon {
  position: absolute;
  right: -15px;
  background-color: #4caf50;
  padding: 5px;
  border-radius: 10%;
  box-shadow: 0px 0px 5px 0px #4caf50;
  transition: all 0.3s ease-in-out;
}
.services-icon img {
  position: relative;
  left: 1px;
}
</style>
