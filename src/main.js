
import 'bootstrap/dist/css/bootstrap.css'
import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import 'bootstrap/dist/js/bootstrap'
import createPersistedState from 'pinia-plugin-persistedstate'
import '@fortawesome/fontawesome-free/css/all.min.css'
import App from './App.vue'
import router from './router'
import axios from 'axios'

window.axios = axios
window.axios.defaults.baseURL = 'https://gestion-de-eventos-production.up.railway.app'
window.axios.defaults.headers.common['Accept']= 'aplication/json'
window.axios.defaults.headers.common['content-type']= 'aplication/json'
window.axios.defaults.headers.common['X-Requested-With']= 'XMLHttpRequest'
window.axios.defaults.withCredentials = true

const pinia = createPinia()
pinia.use(({store}) => {
    store.router = markRaw(router)
})
pinia.use(createPersistedState)

const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
