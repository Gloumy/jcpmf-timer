import { createRouter, createWebHistory } from 'vue-router'
import CardSelectView from '@/views/CardSelect.vue'
import CardTimerView from '@/views/CardTimer.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: CardSelectView
    },
    {
      path: '/card',
      name: 'card',
      component: CardTimerView
    },
  ]
})

export default router
