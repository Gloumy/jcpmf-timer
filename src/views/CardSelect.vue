<script setup lang="ts">
import { JsonConvert } from 'json2typescript'
import { cards05 } from '@/data/cards05'
import { Week } from '@/models/Card/Week';

let jsonConvert: JsonConvert = new JsonConvert();
const weeks = jsonConvert.deserializeArray(cards05, Week);

</script>

<template>
    <v-expansion-panels>
        <v-expansion-panel v-for="week in weeks" :key="week.weekNumber" :title="week.displayTitle()">
            <template v-slot:text>
                <span class="d-flex justify-space-around"><v-btn variant="text" v-for="day in week.days" :key="day.day">{{ day.day
                }}</v-btn></span>
            </template>

        </v-expansion-panel>
    </v-expansion-panels>
</template>