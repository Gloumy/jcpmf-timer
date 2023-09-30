import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'

import { JsonConvert } from 'json2typescript'
import { cards05 } from '@/data/cards05'
import { Week } from '@/models/Card/Week'

export const useCardsStore = defineStore('cards', () => {
  const weeks: Ref<Week[]> = ref([])

  function initWeeks() {
    const jsonConvert: JsonConvert = new JsonConvert();
    weeks.value = jsonConvert.deserializeArray(cards05, Week);
  }

  return { weeks, initWeeks }
})
