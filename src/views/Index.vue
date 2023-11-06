<script>
/*import {ref,onMounted} from 'vue';
import {confirmation} from '../functions'
import {useAuthStore} from '../stores/auth'
import { assertImportSpecifier } from '@babel/types';
import axios from 'axios';
const authStore = useAuthStore();
axios.defaults.headers.common['Authorization'] = 'Bearer' +authStore.authToken;
onMounted(()=> {getUser()});
const usuario = ref([]);
const load = ref(false);
const getUser = async () =>{
  await axios.get('api/v1/usuario').then(
    response =>(usuario.value = response.data))
    load.value = true;
}
const deletUser = (id,name) =>{
  confirmation(name,('/api/v1/Usuario/',+id),'/Usuarios')
}*/
</script>
<template>
    <div class="row">
        <div class="col-md-4 offset-md-4">
            <div class="d-grid col-10 mx-auto">
                <router-link :to="{path:'create'}" class="btn btn-dark">
                    <i class="fa-solid fa-circle-plus"></i> ADD
                </router-link>
            </div>
        </div>
    </div>
    <div class="row mt-3">
        <div class="col-md-6 offset-md-3"> 
            <div class="card border border-white text-center" >
               <!-- <div class="card-body">
                    <img src="/loading.gif" class="img-fluid">
                </div> -->
            </div>
            <div class="table-respondive" >
            <table class="table table-bordered table-hoever">
                <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>PRIVATE</th>
              <!-- Agrega más columnas según los datos de la API -->
            </tr>
          </thead>
          <tbody class="table-group-divider">
            <tr v-for="user,i in users" :key="user.id">
              <td>{{ user.id }}</td>
              <td>{{ user.name }}</td>
              <td>{{ user.full_name }}</td>
              <td>{{ user.private }}</td>
              <td>
                <router-link :to="{path:'edit/'+user.id}" class="btn bt-warning">
                    <i class="fa-solid fa-edit"></i>
                </router-link>
              </td>
              <td>
                <button class="btn btn-danger" @click="$event => deletUser(user.id,user.name)">
                    <i class="fa-solid fa-trash"></i>
                </button>
              </td>
             
            </tr>
          </tbody>
            </table>
            </div>
        </div> 
    </div>
</template>