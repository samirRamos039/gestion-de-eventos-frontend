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
            <tr v-for="user in users" :key="user.id">
              <td>{{ user.id }}</td>
              <td>{{ user.name }}</td>
              <td>{{ user.full_name }}</td>
              <td>{{ user.private }}</td>
              <td>
                <router-link :to="{ path: 'view/' + user.id }" class="btn btn-info">
                  <i class="fa-solid fa-eye"></i>
                </router-link>
                &nbsp;
                <router-link :to="{ path: 'edit/' + user.id }" class="btn btn-warning">
                  <i class="fa-solid fa-edit"></i>
                </router-link>
                &nbsp;
                <button class="btn btn-danger">
                  <i class="fa-solid fa-trash"></i>
                </button>
              </td>
              <!-- Agrega más celdas según los datos de la API  test -->
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: []
    };
  },
  mounted() {
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
};
</script>

