import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Organizations from "../views/Organizations.vue";
import OrganizationShow from "../views/OrganizationShow.vue";
import OrganizationEdit from "../views/OrganizationEdit.vue";
import Logout from "../views/Logout.vue";
import Shifts from "../views/Shifts.vue"


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout
  },
  {
    path: '/organizations',
    name: 'Organizations',
    component: Organizations
  },
  {
    path: '/organization/:id',
    name: 'OrganizationShow',
    component: OrganizationShow
  },
  {
    path: '/organization/:id/edit',
    name: 'OrganizationEdit',
    component: OrganizationEdit
  },
  {
    path: '/organization/:id/shifts',
    name: 'Shifts',
    component: Shifts
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
