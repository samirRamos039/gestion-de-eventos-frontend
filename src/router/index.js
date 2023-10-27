import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EditUser from '../views/EditUser.vue'
import ListUser from '../views/ListUser.vue'
import Login from '../views/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/new',
      name: 'new',
      component: EditUser
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: EditUser
    },
    {
      path: '/list',
      name: 'list',
      component: ListUser
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
   
  ]
})

export default router
