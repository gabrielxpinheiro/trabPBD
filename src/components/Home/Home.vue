<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-12">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <img class="logo" src="src\images\logo.png" alt="logo" />

          <div class="collapse navbar-collapse" id="conteudoNavbarSuportado">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Home
                  <span class="sr-only">(página atual)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >Dropdown</a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">Ação</a>
                  <a class="dropdown-item" href="#">Outra ação</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Algo mais aqui</a>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#">Desativado</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.logo {
  height: 150px;
  width: 150px;
}

.navbar {
  border-radius: 0px 0px 100px 100px;
  width: 100%;
}
</style>