<template>
  <div class="row">
    <div >
      <div class="table-responsive">
        <h1>Lista de Usuarios</h1>
        <table class="table table-bordered table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>PRIVATE</th>
              <!-- Agrega más columnas según los datos de la API -->
            </tr>
          </thead>
          <tbody>
            <!-- <tr v-for="user in users" :key="user.id">
              <td>{{ user.id }}</td>
              <td>{{ user.name }}</td>
              <td>{{ user.full_name }}</td>
              <td>{{ user.private }}</td>
              <td>
                <router-link :to="{path:'view/' + user.id}" class="btn btn-info">
                  <i class="fa-solid fa-eye"></i>
                </router-link>
                &nbsp;
                <router-link :to="{ path: 'edit/' + user.id }" class="btn btn-warning">
                  <i class="fa-solid fa-edit"></i>
                </router-link>
                &nbsp;
                <button class="btn btn-danger" v-on:click="eliminar(user.id, user.name)">
                  <i class="fa-solid fa-trash"></i>
                </button>
              </td> -->
              <!-- Agrega más celdas según los datos de la API  test -->
            <!-- </tr> -->
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios';
// import {ref, onMounted} from 'vue';
// import {confirmation, solicitud} from '../functions';
// import { useAuthStore } from '../stores/auth';
// const authStore = useAuthStore();
// axios.defaults.headers.common['Authorization'] = 'Bearer' + authStore.authToken;
// onMounted( () => { getContactos() } );
// const contactos = ref([]);
// const load = ref(false);
// const getContactos = async () => {
//   await axios.get('/api/v1/listarcontactos').then(
//     response => (
//       console.log(response.data)
//       // contactos.value = response.data
//     ));
//     localStorage.value = true;
// }
</script>

