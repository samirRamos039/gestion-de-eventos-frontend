import {defineStore} from 'pinia';
import { show_alerta } from '../functions';

export const useAuthStore = defineStore('auth'),{
    state: () => ({ authUser: null, authToken: null}),
    getters:{
        user:(state) => state.authUser,
        token:(state) => state.authToken
    },
    actions:{
        async getToken(){
            await axios.get('/sanctum/csrf-cookie');
        },
        async login(from){
            await this.getToken();
            await axios.post('/api/auth/login',from).then(
                (res) => {
                    this.authToken = res.data.token;
                    this.authUser = res.data.token;
                    this.router.push('/usuarios');
                    // min 
                }
            )
        }
    }
}