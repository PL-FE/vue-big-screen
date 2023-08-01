import { createRouter, createWebHistory } from 'vue-router'
import PCLayout from '@/layout/PCLayout.vue'
import BigScreenLayout from '@/layout/BigScreenLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/PC',
      name: 'PCLayout',
      component: PCLayout
    },
    {
      path: '/',
      name: 'BigScreenLayout',
      component: BigScreenLayout
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
