<script setup lang="ts">
import { Card } from '@/models/Card/Card'

const mockCard = new Card().mock();
let currentStep = 0;

function timer() {
  currentStep = 0;
  const maxIndex = mockCard.steps[mockCard.steps.length - 1].index;
  console.log('maxIndex', maxIndex);
  while (currentStep <= maxIndex) {
    console.log('current', currentStep)
    setTimeout(() => {
      
    }, mockCard.steps[currentStep].duration)
    currentStep++;
    console.log('duration end', currentStep)
  }

  // mockCard.steps.forEach(step => {
  //   console.log('current', currentStep)
  //   setTimeout(() => {
  //     currentStep++;
  //   }, step.duration)
  //   console.log('duration end')
  // });
}
</script>

<template>
  <main>
    <span>{{ mockCard.title }}</span>
    <p :class="currentStep == step.index ? 'bold' : ''" v-for="step in mockCard.steps" :key="step.index">{{ step.index + 1
    }}. {{ step.type }} - {{ step.duration }}s</p>
    <button @click="timer()">Start</button>
  </main>
</template>
