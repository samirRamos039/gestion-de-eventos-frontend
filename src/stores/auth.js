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
        async login(from){
            await this.getToken();
            await axios.post('/api/auth/login',from).then(
                (res) => {
                    this.authToken = res.data.token;
                    this.authUser = res.data.token;
                    this.router.push('/usuarios');
                    // min 
                }
            ).catch(
                (errors)=> {
                    let desc = '';
                    errors.res.data.errors.map(
                        (e) => {desc = desc + ' ' + e}
                    )
                    showalerta(desc, 'error', '');
                    
                }
            )
        },

        async register(from){
            await this.getToken();
            await axios.post('/api/auth/register',from).then(
                (res) => {
                    showalerta(res,data,message,'success', '')
                    setTimeout(() => this.router.push('/login'), 2000)
                    
                }
            ).catch(
                (errors)=> {
                    let desc = '';
                    errors.res.data.errors.map(
                        (e) => {desc = desc + ' ' + e}
                    )
                    showalerta(desc, 'error', '');
                    
                }
            )
        },

        async logout(){
            await axios.get('api/auth,logout', this.authToken)
            this.authToken = res.data.token;
            this.authUser = res.data.token;
            this.router.push('/login');
        }
    },
    persist:true
})