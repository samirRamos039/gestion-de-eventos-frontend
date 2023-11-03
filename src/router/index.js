import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import HomeView from '../views/HomeView.vue'
import EditUser from '../views/EditUser.vue'
import ListUser from '../views/ListUser.vue'
import Login from '../views/Login.vue'
import Registro from '../views/Registro.vue'

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
    {
      path: '/registro',
      name: 'registro',
      component: Registro
    }
  ]
})

router.beforeEach(async(to)=>{
  const publicPages = ['/login','/registro']
  const authRequired = !publicPages.includes(to.path)
  const auth = useAuthStore()
  if (authRequired && !auth.user){
    auth.returnUrl = to.fullPath
    return '/login'
  }
})



export default router
