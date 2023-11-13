<!--
<template>
<div class="row mt-3">
    <div class="col-md-6 offset-md-3">
        <div class="card">
            <div class="card-header bg-dark text-white text-center">
                New User
            </div>
            <div class="card-body"></div>
            <form>
                <div class="d-grid col-6 mx-auto mb-3">
                    <img v-if="this.foto" height="100px" :src="this.foto" id="fotoimg" class="img-thumbnail" alt="">
                    <img v-else height="100px" src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png" class="img-thumbnail" id="fotoimg" alt="">
                </div>
                <div class="d-grid col-6 mx-auto mb-3">
                    <span class="input-group-text"><i class="fa-solid-fa-user"></i></span>
                    <input type="text" v-model="nombre" id="nombre" placeholder="Ingrese su nombre" required maxlength="50" class="form-control">
                </div>
                <div class="d-grid col-6 mx-auto mb-3">
                    <span class="input-group-text"><i class="fa-solid-fa-user"></i></span>
                    <input type="text" v-model="email" id="email" placeholder="Ingrese su email" required maxlength="50" class="form-control">
                </div>
                <div class="d-grid col-6 mx-auto mb-3">
                    <span class="input-group-text"><i class="fa-solid-fa-user"></i></span>
                    <input type="text" v-model="apodo" id="apodo" placeholder="Ingrese su apodo" required maxlength="50" class="form-control">
                </div>
                <div class="d-grid col-6 mx-auto mb-3">
                    <span class="input-group-text"><i class="fa-solid-fa-user"></i></span>
                    <input type="text" v-model="password" id="password" placeholder="Ingrese su contraseña" required maxlength="50" class="form-control">
                </div>
            </form>
        </div>
    </div>
</div>
</template>
-->

<template>
  <div class="row mt-5">
    <div class="col-md-4 offset-md-4">
      <div class="card border border-success">
        <div class="card-header bg-success border border-success text-white">
          REGISTER
        </div>
      <div class="card-body">
        <!--
        <form @submit.prevent="$event => authStore.register(form)">
          -->
        <form v-on:submit="saveUser">
          <div class="input-group mb-3">
            <span class="input-group-text">
              <i class="fa-solid fa-at"></i>
            </span>
            <input autofocus type="text" v-model="name"
            placeholder="Name" id="name" class="form-control">
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text">
              <i class="fa-solid fa-at"></i>
            </span>
            <input autofocus type="text" v-model="apodo"
            placeholder="Apodo" id="apodo" class="form-control">
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text">
              <i class="fa-solid fa-at"></i>
            </span>
            <input autofocus type="text" v-model="email"
            placeholder="Email" id="email" class="form-control">
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text">
              <i class="fa-solid fa-key"></i>
            </span>
            <input type="password" v-model="password"
            placeholder="Password" id="password" class="form-control">
          </div>
          <div class="d-grid col-10 mx-auto">
            <button class="btn btn-black">Send</button>
          </div>
        </form>
      </div> 
      </div>
    </div>
  </div>
    
</template>

<script>

import {ref} from 'vue';
import {useAuthStore} from '../stores/auth';
import { showalerta, solicitud } from '../functions';
//const authStore=useAuthStore();
//const form = ref({name:'',apodo:'',email:'', password:'', url:'https://gestion-de-eventos-production.up.railway.app/api/v1/usuario', cargando:false}); 


export default{
  data(){
    return{
      //form
      //cargando:false
      name:'',
      apodo:'',
      email:'', 
      password:'', 
      url:'https://gestion-de-eventos-production.up.railway.app/api/v1/usuario', 
      cargando:false
    }
  },
  methods:{
    saveUser(){
      //event.preventDefault();
      if (this.name.trim()===''){
        showalerta('ingrese un nombre', 'warning', 'nombre');
      }else if(this.email.trim()===''){
        showalerta('ingrese un email', 'warning', 'email');
      } else if(this.password.trim()===''){
        showalerta('ingrese una contraseña', 'warning', 'contraseña');
      } else{
        var parameters = {nombre:this.name.trim(),apodo:this.apodo.trim(),email:this.email.trim(),password:this.password.trim()}
        solicitud('POST',parameters,this.url, 'usuario registrado');
      };
      
       //this.cargando = true;

    }/*,
    photoPreview(event){
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = function(){
        var myPhoto=document.getElementById('nombreImagen');
        myPhoto.src = reader.result;
        this.photo = myPhoto.src;
      }
    }
    */
  }
}
</script>