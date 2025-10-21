import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/resume/:name',
      name: 'resume',
      component: () => import('@/views/resume/route-page.vue'),
    },
  ],
})

export default router
