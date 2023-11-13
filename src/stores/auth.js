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
                    this.authUser = res.data.token;
                    this.router.push('/views');
                    // min 
                }
            ).catch(
                (errors)=> {
                    let desc = '';
                    errors.response.data.errors.map(
                        (e) => {desc = desc + ' '+e}
                    )
                    showalerta(desc,'error','');
                    
                }
            )
        },

        async register(form){
            await this.getToken();
            await axios.post('/api/v1/usuario',form).then(
                (res) => {  
                    console.log("data", res.data);
                    showalerta(res.data.message,'success', '');
                    setTimeout(() => this.router.push('/login'), 2000);
                    
                }
                ).catch(
                  (errors)=> {
                    let desc = '';
                    console.log(errors.response.data);
                    // errors.response.data.map(
                    //     (e) => {desc = desc + ' ' + e}
                    // )
                    showalerta(errors.response.data.message, 'error', '');
                    
                }
            )
        },

        async logout(){
            await axios.get('/api/auth/logout', this.authToken)
            this.authToken = res.data.token;
            this.authUser = res.data.token;
            this.router.push('/login');
        }
    },
    persist:true
});