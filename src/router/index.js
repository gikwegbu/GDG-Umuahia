import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue' 
import About from '../views/About.vue' 
import Team from '../views/Team.vue'
import Contact from '../views/Contact.vue'
import Events from '../views/Events.vue'
// This is for administrative routing
import adminAuth from '../views/Admin/Auth.vue'
import adminDashboard from '../views/Admin/views/dashboard.vue'
import AddEvents from '../views/Admin/views/AddEvents.vue'
import EventHistory from '../views/Admin/views/EventHistory.vue'
import adminTeam from '../views/Admin/views/team.vue'
import adminMessage from '../views/Admin/views/message.vue'
import adminProfile from '../views/Admin/views/profile.vue'

// importing the layouts
import admin from '../layouts/admin'
import Auth from '../layouts/adminAuth'
import webview from '../layouts/webview'

// Using the imported layouts
Vue.component('admin-layout', admin),
Vue.component('Auth-layout', Auth),
Vue.component('webview-layout', webview)

Vue.use(VueRouter)
Vue.use(require('vue-moment'))
const routes = [
  {
    path: '/',
    name: 'home',
    meta: {layout: 'webview'},
    component: Home
  }, 
  {
    path: '/about',
    name: 'about',
    meta: {layout: 'webview'},
    component: About
  },
  {
    path: '/team',
    name: 'co-leads',
    meta: {layout: 'webview'},
    component: Team
  },
  {
    path: '/contact',
    name: 'contact',
    meta: {layout: 'webview'},
    component: Contact
  },
  {
    path: '/events',
    name: 'events',
    meta: {layout: 'webview'},
    component: Events
  },
  {
    path: '/Admin/',
    name: 'auth',
    meta: {layout: 'Auth'},
    component: adminAuth
  },
  {
    path: '/Admin/views/dashboard',
    name: 'dashboard',
    meta: {layout: 'admin'},
    component: adminDashboard
  },
  {
    path: '/Admin/views/addevents',
    name: 'addEvent',
    meta: {layout: 'admin'},
    component: AddEvents
  },
  {
    path: '/Admin/views/eventhistory',
    name: 'eventHistory',
    meta: {layout: 'admin'},
    component: EventHistory
  },
  {
    path: '/Admin/views/team',
    name: 'Admin Team Edit',
    meta: {layout: 'admin'},
    component: adminTeam
  },
  {
    path: '/Admin/views/message',
    name: 'Admin View Messages',
    meta: {layout: 'admin'},
    component: adminMessage
  },
  {
    path: '/Admin/views/profile',
    name: 'Admin Profile',
    meta: {layout: 'admin'},
    component: adminProfile
  },
]

const router = new VueRouter({
  routes
})

export default router
