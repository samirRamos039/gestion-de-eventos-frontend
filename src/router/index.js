import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import EditUser from '../views/EditUser.vue'
import Login from '../views/Login.vue'
import Registro from '../views/Registro.vue'

//contactos
import contactos from '../views/Contactos/Index.vue'
import crearContactos from '../views/Contactos/Create.vue'
import editarContactos from '../views/Contactos/Edit.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/edituser/:id',
      name: 'edit',
      component: EditUser
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
    },
    {
      path: '/contactos',
      name: 'contactos',
      component: contactos
    },
    {
      path: '/editarContactos/:id',
      name: 'editarContactos',
      component: editarContactos
    },
    {
      path: '/crearContactos',
      name: 'crearContactos',
      component: crearContactos
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
