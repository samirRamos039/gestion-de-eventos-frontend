<script setup>
import { ref } from 'vue';
import { useAuthStore } from '../stores/auth';
const authStore = useAuthStore();
const form = ref({nombre:'', apodo:'', email:'', password:''}); 
</script>
<template>
  <div class="row mt-5">
    <div class="col-md-4 offset-md-4">
      <div class="card border border-success">
        <div class="card-header bg-success border border-success text-white">
          Crear Usuario
        </div>
      <div class="card-body">
        <!--
        <form @submit.prevent="$event => authStore.register(form)">
          -->
        <form @submit.prevent="authStore.register(form)">
          <div class="input-group mb-3">
            <span class="input-group-text">
              <i class="fa-solid fa-at"></i>
            </span>
            <input autofocus type="text" v-model="form.nombre"
            placeholder="Name" id="name" class="form-control">
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text">
              <i class="fa-solid fa-at"></i>
            </span>
            <input autofocus type="text" v-model="form.apodo"
            placeholder="Apodo" id="apodo" class="form-control">
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text">
              <i class="fa-solid fa-at"></i>
            </span>
            <input autofocus type="email" v-model="form.email"
            placeholder="Email" id="email" class="form-control">
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text">
              <i class="fa-solid fa-key"></i>
            </span>
            <input type="password" v-model="form.password"
            placeholder="Password" id="password" class="form-control">
          </div>
          <div class="d-grid col-10 mx-auto">
            <button class="btn btn-success">Enviar</button>
          </div>
        </form>
      </div> 
      </div>
    </div>
  </div>
    
</template>