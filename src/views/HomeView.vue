

<template>
  <div class="row">
    <div class="col-lg-8 offset-lg-2">
      <div class="table-responsive">
        <table class="table table-bordered table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>EMAIL</th>
              <th>FOTO</th>
              <th>NOMBRE</th>
              <th>APODO</th>
            </tr>
          </thead>
          <tbody class="table-group-divider" id="contenido"></tbody>
           <tr v-if="this.cargando">
            <td colspan="5"><h3>CARGANDO...</h3></td>
          </tr>
          <tr v-else v-for="user, i in usuario" :key ="user.id">
            <td v-text="(i+1)"></td>
            <td v-text="user.id"></td>
            <td v-text="user.email"></td>
            <td v-text="user.apodo"></td>
            <!-- <td v-text="user.photo"></td>–>\-->
            <td>
              <router-link :to="{path:'view/'+user.id}" class="btn btn-info">
                <i class="fa-solid fa-eye"></i>
              </router-link>
              &nbsp;
              <router-link :to="{path:'edit/'+user.id}" class="btn btn-warning">
                <i class="fa-solid fa-edit"></i>
              </router-link>
              &nbsp;
              <button class="btn btn-danger">
                <i class="fa-solid fa-trash"></i>
              </button>
            </td>
          </tr>
        </table>

      </div>
    </div>
  </div>
</template>



<script>
import axios from 'axios';
export default {
  data() {
    return {
      usuario: [],
      cargando:false
    };
  },
  mounted(){
    this.getUser();
  },
  methods:{
    getUser(){
      this.cargando=true;
      axios.get('https://gestion-de-eventos-production.up.railway.app/api/v1/usuario').then(
      res =>{
        this.usuario=res.data;
        this.cargando=false;
      }
    );
    } 
    
  }

  /*mounted() {
    // Hacer una solicitud a la API usando fetch cuando el componente se monta
    fetch('https://api.github.com/users/hacktivist123/repos')
      .then(response => {
        // Verificar si la solicitud fue exitosa
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // Parsear la respuesta JSON y asignarla a la propiedad 'users'
        return response.json();
      })
      .then(data => {
        this.users = data;
      })
      .catch(error => {
        // Manejar errores de la solicitud
        console.error('There has been a problem with your fetch operation:', error);
      });
  }
  */
};


</script>
