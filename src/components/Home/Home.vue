<template>
  <div class="container">
    <div class="row justify-content-center menu">
      <div class="col-lg-12">
        <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
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
                <a class="nav-link" href="#">Filmes</a>
              </li>
              <!-- <li class="nav-item dropdown">
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
              </li>-->
              <li class="nav-item">
                <a class="nav-link" href="#">Séries</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Documentários</a>
              </li>
              <form class="login">
                <div class="form-row align-items-center">
                  <div class="col-sm-3 my-1">
                    <label class="sr-only" for="inlineFormInputGroupUsername">Usuário</label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <div class="input-group-text">#</div>
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        id="inlineFormInputGroupUsername"
                        placeholder="Usuário"
                      />
                    </div>
                  </div>
                  <div class="col-sm-3 my-1">
                    <label class="sr-only" for="inlineFormInputSenha">Senha</label>
                    <input
                      type="password"
                      class="form-control"
                      id="inlineFormInputSenha"
                      placeholder="Senha"
                    />
                  </div>
                  <!-- <div class="col-auto my-1">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="autoSizingCheck2" />
                      <label class="form-check-label" for="autoSizingCheck2">Lembrar de mim</label>
                    </div>
                  </div> -->
                  <div class="col-auto my-1">
                    <button type="submit" class="btn btn-outline-warning">Entrar</button>
                  </div>
                  <div class="col-auto">
                    <router-link to="/cadastro">Criar cadastro</router-link>
                  </div>
                </div>
              </form>
            </ul>
          </div>
        </nav>
      </div>
    </div>
    <div class="row justify-content-center corpo">
      <div class="col-lg-10">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" src="src\images\coringa.jpg" alt="Primeiro Slide" />
              <div class="carousel-caption d-none d-md-block">
                <h5>Coringa</h5>
                <p>
                  Coringa é uma história original do vilão nunca antes vista no cinema.
                  Arthur Fleck (Joaquin Phoenix) trabalha como palhaço para uma agência de talentos e...
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="src\images\malevola.jpg" alt="Segundo Slide" />
              <div class="carousel-caption d-none d-md-block">
                <h5>Malévola: Dona do Mal</h5>
                <p>
                  Uma aventura que se passa vários anos depois de “Malévola” –
                  em que o público aprendeu sobre os eventos que endureceram o
                  coração da vilã mais famosa da Disney...
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="src\images\reiLeao.jpg" alt="Terceiro Slide" />
              <div class="carousel-caption d-none d-md-block">
                <h5>O Rei Leão</h5>
                <p>
                  Mufasa é o rei na savana africana, respeitado por outros animais
                  e temido por inimigos. Seu filho, Simba, tem o pai como ídolo e aprendeu
                  com ele sobre o ciclo da vida e a importância de manter a harmonia e dar
                  continuidade ao reinado da Pedra do Reino...
                </p>
              </div>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Anterior</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Próximo</span>
          </a>
        </div>
      </div>
      <div class="col-lg-2 lancamento mt-4">
        <div class="card" style="width:20rem;">
          <img class="card-img-top" src="src\images\teotfw.jpg" alt="Imagem de capa do card" />
          <div class="card-body">
            <h5 class="card-title">The end of the f***ing world - 2ª temporada</h5>
            <p class="card-text">Assista a segunda temporada agora.</p>
            <a href="#" class="btn btn-outline-warning">Assistir</a>
          </div>
        </div>
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
  border-radius: 0px 0px 0px 0px;
  width: 100%;
  height: 15%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.menu {
  padding-bottom: 130px;
}

.card-body {
  background-color: #343a40;
  color: white;
}

.card {
  border: none;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 12px 40px 0 rgba(0, 0, 0, 0.19);
}

.slide {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 12px 40px 0 rgba(0, 0, 0, 0.19);
}

.corpo {
  margin-left: -120px;
}

.login {
  margin-left: 500px;
}
</style>