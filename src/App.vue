

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Gestion de Eventos</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
            aria-expanded="false">Users</a>
          <ul class="dropdown-menu">
            <li>
              <RouterLink class="dropdown-item" to="/"> Home</RouterLink>
            </li>
            <li>
              <RouterLink class="dropdown-item" to="/new"> Nwe user</RouterLink>
            </li>
            <li>
              <RouterLink class="dropdown-item" to="/list"> List users</RouterLink>
            </li>
            <li>
              <RouterLink class="dropdown-item" to="/edit"> Edit user</RouterLink>
            </li>
            <li>
              <RouterLink class="dropdown-item" to="/mew"> Nwe user</RouterLink>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>

      </ul>
    </div>
  </nav>

  <RouterView />
</template>
