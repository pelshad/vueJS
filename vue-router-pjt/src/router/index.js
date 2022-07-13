//라우터 기능을 미들웨어라고 함
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import IntroduceView from '../views/IntroduceView.vue'
import DataBindingList from '../views/DataBindingList.vue'
import Rendering from '../views/RenderingShow.vue'
import EventClick from '../views/EventClick.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/Intro',
    name: 'Intro',
    component: IntroduceView
  },
  {
    path: '/DataBindingList',
    name: 'DataBindingList',
    component: DataBindingList
  },
  {
    path: '/Rendering',
    name: 'Rendering',
    component: Rendering
  },
  {
    path: '/EventClick',
    name: 'EventClick',
    component: EventClick
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
