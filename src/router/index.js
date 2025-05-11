import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SearchView from '../views/SearchView.vue'
import LibraryView from '../views/LibraryView.vue'
import signup from '../views/signup.vue'
import login from '../views/login.vue'
import { getAuth } from 'firebase/auth'
import { auth } from '@/firebase'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      component: HomeView
    }, {
      path: '/',
      component: signup
    },{
      path: '/login',
      component: login
    },
    {
      path: '/search',
      component: SearchView
    },
    {
      path: '/library',
      component: LibraryView
    }
  ]
})

export default router
