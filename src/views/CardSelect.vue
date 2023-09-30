<script setup lang="ts">
import { useCardsStore } from '@/stores/cards';

const cardsStore = useCardsStore();
</script>

<template>
    <v-expansion-panels>
        <v-expansion-panel v-for="week in cardsStore.weeks" :key="week.weekNumber" :title="week.displayTitle()">
            <template v-slot:text>
                <span class="d-flex justify-space-around"><v-btn variant="text" v-for="day in week.days" :key="day.day">{{
                    day.day
                }}</v-btn></span>
            </template>

        </v-expansion-panel>
    </v-expansion-panels>
</template>