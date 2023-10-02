import { computed, ref, type Ref } from 'vue'
import { defineStore } from 'pinia'

import { JsonConvert } from 'json2typescript'
import { cards05 } from '@/data/cards05'
import { Card } from '@/models/Card/Card'

export const useCardsStore = defineStore('cards', () => {
  const cards: Ref<Card[]> = ref([])

  const selectedCard: Ref<Card> = ref(new Card());

  const weeksNumbers = computed(() => {
    const numbers = cards.value.map(c => c.week);
    return [...new Set(numbers)]
  });

  function cardsForWeek(week: number) {
    return cards.value.filter(c => c.week == week)
  }

  function initWeeks() {
    const jsonConvert: JsonConvert = new JsonConvert();
    cards.value = jsonConvert.deserializeArray(cards05, Card);
  }

  function selectCard(week: number, day: number) {
    const cardToSelect = cards.value.find(c => c.week == week && c.day == day)
    if (cardToSelect)
      selectedCard.value = cardToSelect;
  }

  return { cards, weeksNumbers, selectedCard, cardsForWeek, initWeeks, selectCard }
})
