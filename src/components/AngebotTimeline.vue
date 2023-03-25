<template>
  <div class="timeline">
    <span class="first" ref="first">1</span>
    <span class="second" ref="second">2</span>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref, watch } from "vue";

const first = ref();
const second = ref();

const props = defineProps({
  active: Number,
});
onMounted(() => {
  return setActive();
});
watch(props, () => {
  return setActive();
});
const setActive = () => {
  if (props.active === 1)
    return (
      first.value.classList.add("active"),
      second.value.classList.remove("active")
    );
  if (props.active === 2)
    return (
      first.value.classList.remove("active"),
      second.value.classList.add("active")
    );
};
</script>
<style>
.first,
.second {
  position: relative;
  padding: 10px 15px;
  background-color: #f1f2f4;
  border: #000;
  font-weight: bold;
  font-size: 25px;
  margin: 0 10px;
  border: 1px solid #000;
  transition: 0.15s all ease-in;
  color: #000;
}
.first.active,
.second.active {
  background-color: rgb(92 229 38);
}
.first::after,
.second::after {
  color: rgb(92 229 38);
}

.first::after {
  content: "Ihre Daten";
}
.second::after {
  content: "Umzugsinfo";
}
.first::after,
.second::after {
  position: absolute;
  color: inherit;
  top: 100%;
  font-size: 8px;
  left: 0;
  margin-top: 4px;
}
</style>
