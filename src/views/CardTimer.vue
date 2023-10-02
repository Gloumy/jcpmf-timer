<script setup lang="ts">
import { computed, ref } from 'vue'
import { useSound } from '@vueuse/sound'
import countdownSound from '@/assets/sounds/countdown-4.mp3'
import { useCardsStore } from '@/stores/cards';

const cardsStore = useCardsStore();
const currentStep = ref(-1);
const currentStepCountdown = ref(0);
const { play } = useSound(countdownSound)
async function timer() {
  const maxIndex = cardsStore.selectedCard.steps.length - 1;
  for (let i = 0; i <= maxIndex; i++) {
    currentStep.value = i;
    const duration = cardsStore.selectedCard.steps[i].durationMilliseconds();
    for (let j = duration; j >= 0; j -= 1000) {
      currentStepCountdown.value = j;
      if (j == 3000) play();
      await new Promise(r => setTimeout(r, 1000))
    }
  }

  currentStep.value = -1;
}

const countdownDisplay = computed(() => {
  const lessThanMinute = currentStepCountdown.value <= 60000;
  let minute = Math.floor(currentStepCountdown.value / 60000);
  let seconds = lessThanMinute ? Math.floor(currentStepCountdown.value / 1000) : (currentStepCountdown.value % 60000) / 1000;

  if (seconds == 60) {
    seconds = 0;
  }

  return minute.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0");
})
</script>

<template>
  <v-col cols="12" align="center" justify="center">
    <h3>Semaine {{ cardsStore.selectedCard.week }} - Jour {{ cardsStore.selectedCard.day }}</h3>
    <span class="text-h5">{{ countdownDisplay }}</span>

    <v-card v-for="(step, index) in cardsStore.selectedCard.steps" :key="index" variant="tonal" class="px-4 py-2"
      :class="currentStep == cardsStore.selectedCard.steps.indexOf(step) ? 'current-step' : ''">
      <v-row>
        <v-col>{{ index + 1 }}</v-col>
        <v-col>{{ step.type }}</v-col>
        <v-col>{{ step.duration }}</v-col>
      </v-row>
    </v-card>

    <v-btn class="mt-4" color="secondary" :loading="currentStep != -1" :disabled="currentStep != -1"
      @click="timer()">Start</v-btn>
  </v-col>
</template>
