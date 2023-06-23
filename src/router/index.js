import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home-view.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/about-view.vue')
    },
    {
      path: '/knowledge',
      name: 'knowledge',
      component: () => import('../views/knowledge-view.vue')
    },
    {
      path: '/grants',
      name: 'grants',
      component: () => import('../views/grants-view.vue')
    },
    {
      path: '/languages',
      name: 'languages',
      component: () => import('../views/languages-view.vue')
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('../views/news-view.vue')
    },
    {
      path: '/conferences',
      name: 'conferences',
      component: () => import('../views/conferences-view.vue')
    },
    {
      path: '/rules',
      name: 'rules',
      component: () => import('../views/rules-view.vue')
    },
    {
      path: '/questions',
      name: 'questions',
      component: () => import('../views/questions-view.vue')
    }
  ]
})

export default router
