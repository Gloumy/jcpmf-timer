<script setup lang="ts">
import { Card } from '@/models/Card/Card'
import { ref } from 'vue';

import { useSound } from '@vueuse/sound'
import countdownSound from '@/assets/sounds/countdown-4.mp3'

const mockCard = new Card().mock();
const currentStep = ref(-1);
const currentStepCountdown = ref(0);
const { play } = useSound(countdownSound)
async function timer() {
  const maxIndex = mockCard.steps.length - 1;
  for (let i = 0; i <= maxIndex; i++) {
    currentStep.value = i;
    const duration = mockCard.steps[i].duration;
    for (let j = duration; j >= 0; j--) {
      currentStepCountdown.value = j;
      if (j == 3) play();
      await new Promise(r => setTimeout(r, 1000))
    }
  }

  currentStep.value = -1;
}
</script>

<template>
  <v-col cols="12" align="center" justify="center">
    <h3>{{ mockCard.title }}</h3>
    <span class="text-h5">{{ currentStepCountdown }}</span>

    <v-card v-for="step in mockCard.steps" :key="step.index" variant="tonal" class="pa-5"
      :class="currentStep == mockCard.steps.indexOf(step) ? 'current-step' : ''">
      <v-row>
        <v-col>{{ step.index + 1 }}</v-col>
        <v-col>{{ step.type }}</v-col>
        <v-col>{{ step.duration }}</v-col>
      </v-row>
    </v-card>

    <v-btn class="mt-4" color="secondary" :loading="currentStep != -1" @click="timer()">Start</v-btn>
  </v-col>
</template>
