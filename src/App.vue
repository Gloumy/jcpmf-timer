<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterView } from 'vue-router'
import { useCardsStore } from './stores/cards';

const cardsStore = useCardsStore();

onMounted(() => {
  cardsStore.initWeeks();
})
</script>

<template>
  <v-container fluid class="main" full-height>
    <v-row justify="center" class="bg-primary">
      <h2>JCPMF Timer</h2>
      <v-divider></v-divider>

    </v-row>
    <v-row>
      <RouterView />
    </v-row>
  </v-container>
</template>

<style scoped></style>
