import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import CvView from "@/views/CvView.vue";
import ApprenticeshipView from "@/views/ApprenticeshipView.vue";
import Sae201View from "@/views/Sae201View.vue";
import Sae301View from "@/views/Sae301View.vue";
import Sae302View from "@/views/Sae302View.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
    scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/cv',
      name: 'cv',
      component: CvView
    },
    {
      path: '/apprenticeship',
      name: 'apprenticeship',
      component: ApprenticeshipView
    },
    {
      path: '/sae201',
      name: 'sae201',
      component: Sae201View
    },
    {
      path: '/sae301',
      name: 'sae301',
      component: Sae301View
    },
    {
      path: '/sae302',
      name: 'sae302',
      component: Sae302View
    }
  ],
})

export default router
