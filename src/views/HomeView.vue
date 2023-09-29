<script setup lang="ts">
import { Card } from '@/models/Card/Card'
import { ref } from 'vue';

const mockCard = new Card().mock();
let currentStep = ref(-1);

async function timer() {
  console.log('timer started')
  const maxIndex = mockCard.steps.length - 1;
  for (let i = 0; i <= maxIndex; i++) {
    currentStep.value = i;
    console.log('currentStep', currentStep.value)
    const duration = mockCard.steps[i].duration;
    await new Promise(r => setTimeout(r, duration * 1000)).then(() => console.log('duration', mockCard.steps[i].duration));
  }

  currentStep.value = -1;

  // const maxIndex = mockCard.steps[mockCard.steps.length - 1].index;
  // console.log('maxIndex', maxIndex);
  // while (currentStep.value <= maxIndex) {
  //   console.log('current', currentStep.value)
  //   console.log('current duration', mockCard.steps[currentStep.value].duration * 100)
  //   await setTimeout(() => {
  //     currentStep.value++;
  //   }, mockCard.steps[currentStep.value].duration * 10000)
  //   console.log('duration end', currentStep.value)
  // }

  currentStep.value = -1;
}
</script>

<template>
  <main>
    <span>{{ mockCard.title }}</span>

    <v-card v-for="step in mockCard.steps" :key="step.index" variant="tonal" class="pa-5"
      :class="currentStep == mockCard.steps.indexOf(step) ? 'current-step' : ''">
      {{
        step.index + 1
      }}. {{ step.type }} - {{ step.duration }}s
    </v-card>

    <v-btn :loading="currentStep != -1" @click="timer()">Start</v-btn>
  </main>
</template>
