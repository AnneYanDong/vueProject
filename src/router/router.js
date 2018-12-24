import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/home'
import Phone from '../pages/phone'
import Applet from '../pages/applet'
import Computer from '../pages/computer'
import About from '../pages/about'
import User from '../pages/user'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: '/home'
  },
  {
      path:"/home",
      component: Home,
      children: [{
        path:"phone",
        component: Phone,
      },
      {
        path:"applet",
        component: Applet,
      },{
        path:"computer",
        component: Computer,
      }]
  },
  {
      path: "/about",
      component: About
  },
  {
    path: "/user/:id",
    component: User
  }
]

var router =  new VueRouter({
  routes
})
export default router;