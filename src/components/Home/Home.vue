<template>
  <div class="container">
    <NavBar></NavBar>
    <div class="row justify-content-center corpo">
      <div class="col-lg-10">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="3000">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" v-bind:src="filmes[0].imagem" alt="Primeiro Slide" />
              <div class="carousel-caption d-none d-md-block">
                <h5>{{ filmes[0].nome }}</h5>
                <p>
                  {{ filmes[0].descricao }}
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" v-bind:src="documentarios[8].imagem" alt="Segundo Slide" />
              <div class="carousel-caption d-none d-md-block">
                <h5>{{ documentarios[8].nome }}</h5>
                <p>
                  {{ documentarios[8].descricao }}
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" v-bind:src="filmes[6].imagem" alt="Terceiro Slide" />
              <div class="carousel-caption d-none d-md-block">
                <h5>{{ filmes[6].nome }}</h5>
                <p>
                  {{ filmes[6].descricao }}
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" v-bind:src="documentarios[0].imagem" alt="Segundo Slide" />
              <div class="carousel-caption d-none d-md-block">
                <h5>{{ documentarios[0].nome }}</h5>
                <p>
                  {{ documentarios[0].descricao }}
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
          <img class="card-img-top" v-bind:src="series[0].imagem" alt="Imagem de capa do card" />
          <div class="card-body">
            <h5 class="card-title">{{ series[0].nome }}</h5>
            <p class="card-text">Assista a segunda temporada agora.</p>
            <a href="#" class="btn btn-outline-warning">Assistir</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../shared/NavBar/NavBar.vue";
export default {
  data() {
    return {
      filmes: [],
      documentarios: [],
      series:[]
    };
  },
  components: {
    NavBar: NavBar
  },
  created() {
    this.$http
      .get("http://localhost/apitrabalhopbd/listar-filmes.php")
      .then(res => res.json())
      .then(filmes => (this.filmes = filmes), err => console.log(err));

    this.$http
      .get("http://localhost/apitrabalhopbd/listar-documentarios.php")
      .then(res => res.json())
      .then(
        documentarios => (this.documentarios = documentarios),
        err => console.log(err)
      );
      this.$http
      .get("http://localhost/apitrabalhopbd/listar-series.php")
      .then(res => res.json())
      .then(series => (this.series = series), err => console.log(err));
  }
};
</script>

<style scoped>
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
  /* margin-left: 500px; */
}
</style>