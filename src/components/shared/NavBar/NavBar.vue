<template>
  <div class="container">
    <div class="row justify-content-center menu">
      <div class="col-lg-12">
        <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <img class="logo" src="src\images\logo.png" alt="logo" />

          <div class="collapse navbar-collapse" id="conteudoNavbarSuportado">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <router-link class="nav-link" to="/Home" active-class="active" exact>
                  Home
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/Filmes" active-class="active" class="nav-link">Filmes</router-link>
              </li>

              <li class="nav-item">
                <router-link to="/Series" active-class="active" class="nav-link">Series</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/Documentarios" active-class="active" class="nav-link">Documentarios</router-link>
              </li>
              <li class="nav-item ml-5">
                <router-link to="/Playlist" active-class="active" class="nav-link">PlayList</router-link>
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

<style >
.logo {
  height: 150px;
  width: 150px;
}

.navbar {
  border-radius: 0px 0px 0px 0px;
  width: 100%;
  height: 15%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.menu {
  padding-bottom: 130px;
}

</style>