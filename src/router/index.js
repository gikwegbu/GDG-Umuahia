import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue' 
import Team from '../views/Team.vue'
import Contact from '../views/Contact.vue'
import Events from '../views/Events.vue'

Vue.use(VueRouter)
Vue.use(require('vue-moment'))
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  }, 
  {
    path: '/team',
    name: 'co-leads',
    component: Team
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/events',
    name: 'events',
    component: Events
  }
]

const router = new VueRouter({
  routes
})

export default router
