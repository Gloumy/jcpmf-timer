<script setup lang="ts">
import { Card } from '@/models/Card/Card'
import { ref } from 'vue';

const mockCard = new Card().mock();
const currentStep = ref(-1);
const currentStepCountdown = ref(0);

async function timer() {
  const maxIndex = mockCard.steps.length - 1;
  for (let i = 0; i <= maxIndex; i++) {
    currentStep.value = i;
    const duration = mockCard.steps[i].duration;
    for (let j = duration; j >= 0; j--) {
      currentStepCountdown.value = j;
      await new Promise(r => setTimeout(r, 1000))
    }
  }

  currentStep.value = -1;
}
</script>

<template>
  <main>
    <span>{{ mockCard.title }}</span>
    <span>{{ currentStepCountdown }}</span>
    <v-card v-for="step in mockCard.steps" :key="step.index" variant="tonal" class="pa-5"
      :class="currentStep == mockCard.steps.indexOf(step) ? 'current-step' : ''">
      {{
        step.index + 1
      }}. {{ step.type }} - {{ step.duration }}s
    </v-card>

    <v-btn :loading="currentStep != -1" @click="timer()">Start</v-btn>
  </main>
</template>
