<script setup lang="ts">
import { useCardsStore } from '@/stores/cards';

const cardsStore = useCardsStore();

function displayWeekTitle(number: number): string {
    return "Semaine " + number;
} 
</script>

<template>
    <v-expansion-panels>
        <v-expansion-panel v-for="week in cardsStore.weeksNumbers" :key="week" :title="displayWeekTitle(week)">
            <template v-slot:text>
                <span class="d-flex justify-space-around">
                    <v-btn variant="text" v-for="card in cardsStore.cardsForWeek(week)" :key="card.day" @click="cardsStore.selectCard(card.week, card.day)">{{
                        card.day
                    }}</v-btn>
                </span>
            </template>
        </v-expansion-panel>
    </v-expansion-panels>
</template>