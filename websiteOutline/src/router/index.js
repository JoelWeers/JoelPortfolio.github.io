import { createRouter,  createWebHashHistory } from 'vue-router'
import Store from '../views/StorePage.vue'
import Welcome from '../views/WelcomePage.vue'

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/store/:placeName',
    name: "Store",
    component: Store
  },
  {
    path: '/contact',
    name: 'Contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactPage.vue')
  }
]
const router = createRouter({
  history:  createWebHashHistory(),
  routes
})
export default router