<template>
  <div class="autocomplete-input">
    <GMapAutocomplete
      placeholder="Beladestelle, Auszugsort ..."
      :options="autocompleteOptions"
      @change="setBeladestelle($event)"
      ref="beladestelleRef"
      @place_changed="setBeladestelle($event)"
    >
    </GMapAutocomplete>
  </div>
  <div class="autocomplete-input">
    <GMapAutocomplete
      placeholder="Entladestelle, Einzugsort ..."
      :options="autocompleteOptions"
      @change="setEntladestelle($event)"
      ref="entladestelleRef"
      @place_changed="setEntladestelle($event)"
    >
    </GMapAutocomplete>
  </div>
</template>
<script setup lang="ts">
import { reactive, ref } from "vue";
import type { LadeData } from "../interfaces";

const emit = defineEmits<{
  (e: "ladeStelle", data: LadeData): void;
}>();

const beladestelleRef = ref<any>("");
const entladestelleRef = ref<any>("");
const data: LadeData = reactive({
  beladestelle: "",
  entladestelle: "",
});
const autocompleteOptions = reactive({
  componentRestrictions: {
    country: ["de"],
  },
});
const setBeladestelle = (e: any): void => {
  if (e.formatted_addresse) {
    data.beladestelle = e.formatted_addresse;
    emit("ladeStelle", data);
  } else {
    data.beladestelle = beladestelleRef.value!.$el.value;
    emit("ladeStelle", data);
  }
};
const setEntladestelle = (e: any): void => {
  if (e.formatted_addresse) {
    data.entladestelle = e.formatted_addresse;
    emit("ladeStelle", data);
  } else {
    data.entladestelle = entladestelleRef.value.$el.value;
    emit("ladeStelle", data);
  }
};
</script>
<style scoped>
input {
  color: inherit;
  display: flex;
  flex-wrap: wrap;
  letter-spacing: 0.009375em;
  opacity: var(--v-high-emphasis-opacity);
  min-height: var(--v-input-control-height, 56px);
  padding-left: 12px;
  width: 100%;
  min-width: 0;
  border-bottom: 1px solid rgb(118 118 118 / 56%);
}
input:focus {
  outline: none;
}
.autocomplete-input {
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  width: 100%;
  padding: 12px;
}
</style>
