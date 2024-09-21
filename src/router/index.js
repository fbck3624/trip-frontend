import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PersonalView from '../views/PersonalView.vue';
import CreateItineraryView from '../views/CreateItineraryView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/personal',
    name: 'personal',
    component: PersonalView
  },
  {
    path: "/create-itinerary",
    name: "CreateItineraryView",
    component: CreateItineraryView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
