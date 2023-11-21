<script setup>
import axios, { getAdapter } from 'axios';
import { ref, onMounted } from 'vue';
import { confirmation, sendRequest } from '../../functions'
import { useAuthStore } from '../../stores/auth';

const authStore = useAuthStore();
axios.defaults.headers.common['Authorization'] = 'Bearer '+authStore.authToken;
onMounted( ()=> { 
    getContactos();
    getUsuarios();
});
const contactos = ref([]);
const usuarios = ref([]);
const referencia = ref([]);
const load = ref(false);

const getContactos = async () => {
    await axios.get('/api/v1/listarcontactos').then(
        response =>(
            console.log(response.data),
            contactos.value = response.data.data
        ));
    load.value = true;
}
const eliminarContactos = (email, nombre) => {
    confirmation(nombre, ('/api/v1/eliminarcontacto/'+email), '/gestion-de-eventos-frontend/contactos');
}
const getUsuarios = async () => {
    await axios.get('/api/v1/usuarios/buscar/'+referencia.value).then(
        response =>(
            usuarios.value = response.data.data
        ));
}

const agregarContacto = async (email) => {
    sendRequest('GET', {}, ('/api/v1/crearcontacto/'+email), '/gestion-de-eventos-frontend/contactos');
}


</script>
<template>
    <div class="row">
        <div class="col-md-4 offset-md-4">
            <div class="d-grid col-10 mx-auto">
                <a class="btn btn-dark" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <i class="fa-solid fa-circle-plus"></i> agregar contactos
                </a>
            </div>
        </div>
    </div>
    <div class="row mt-3">
        <div class="col-md-6 offset-md-3">
            <div class="card border-white text-center" v-if="!load">
                <div class="card-body">
                    <img src="/contacts.gif" class="img-fluid" alt="cargando...">
                </div>
            </div>
            <div class="table-responsive" v-else>
                <table class="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Foto</th>
                            <th>Correo</th>
                            <th>Nombre</th>
                            <th>Apodo</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider">
                        <tr v-for="contacto, i in contactos" :key="contacto.id">
                            <td>{{ (i+1) }}</td>
                            <td>{{ contacto.foto }}</td>
                            <td>{{ contacto.email }}</td>
                            <td>{{ contacto.nombre }}</td>
                            <td>{{ contacto.apodo }}</td>
                            <td>
                                <button class="btn btn-danger" @click="eliminarContactos(contacto.email,  contacto.nombre)">
                                    <i class="fa-solid fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
  
        <!-- Modal -->
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">Agregar Contactos</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <input type="text" class="form-control" v-model="referencia" @input="getUsuarios">
                    <br>
                    <table class="table table-primary">
                        <thead>
                        <tr>
                            <th>Email</th>
                            <th>Acción</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="usuario in usuarios" :key="usuario.id">
                            <td>{{ usuario.email }}</td>
                            <td>
                                <button class="btn btn-success" @click="agregarContacto(usuario.email)">
                                    <i class="fa-solid fa-circle-plus"></i>
                                </button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">cerrar</button>
                    <!-- <button type="button" class="btn btn-primary">Understood</button> -->
                </div>
            </div>
            </div>
        </div>
    </div>
</template>