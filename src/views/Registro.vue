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
  