

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
          <tr v-else v-for="user, i in this.usuario" :key ="user.id">
            <td v-text="user.id"></td>
            <td v-text="user.email"></td>
            <td v-text="user.foto"></td>
            <td v-text="user.nombre"></td>
            <td v-text="user.apodo"></td>
          </tr>
        </table>

      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default{
  data(){
    return{

      usuario:null,
      cargando:false

    }
  },
  mounted(){
    this.getUser
  },
  methods:{
    getUser(){
       this.cargando = true;
       axios.get('http://localhost:8000/api/v1/Usuario').then(
        res =>{
          this.usuario = res.data;
          this.cargando = false;
        }
       )
    }
  }
}
</script>