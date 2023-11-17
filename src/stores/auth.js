import {defineStore} from 'pinia';
import { showalerta } from '../functions';
import axios from 'axios';

export const useAuthStore = defineStore('auth',{
    state: () => ({ authUser: null, authToken: null}),
    getters:{
        user:(state) => state.authUser,
        token:(state) => state.authToken
    },
    actions:{
        async getToken(){
            await axios.get('/sanctum/csrf-cookie');
        },
        async login(form){
            await this.getToken();
            await axios.post('/api/auth/login',form).then(
                (res) => {
                    console.log(res.data);
                    this.authToken = res.data.token;
                    this.authUser = res.data.data;
                    this.router.push('/contactos');
                    // min 
                }
            ).catch(
                (errors)=> {
                    const errores = errors.response.data.error;
                    showalerta(errores, 'error', '');
                }
            )
        },

        async register(form){
            await this.getToken();
            await axios.post('api/v1/usuario',form).then(
                (res) => {
                    showalerta(res.data.message,'success', '');
                    setTimeout(() => this.router.push('/login'), 2000);
                }
                ).catch(
                  (errors)=> {
                    console.log(errors.response);
                    const errores = errors.response.data.message.join('\n');
                    showalerta(errores, 'error', '');
                }
            )
        },

        async logout(){
            await axios.post('/api/auth/logout', this.authToken)
            this.authToken = null;
            this.authUser = null;
            this.router.push('/login');
        },
    },
    persist:true
});