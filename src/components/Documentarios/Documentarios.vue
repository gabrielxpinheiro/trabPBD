<template>
  <div class="container">
    <NavBar></NavBar>
    <div class="row listagem-conteudo">

      <div class="card-deck " v-for="documentario of documentarios">
      <div class="card mt-3 ml-5" style="max-width: 15rem;">
          <img class="card-img-top" v-bind:src="documentario.imagem" alt="Imagem de capa do card" />
          <div class="card-body">
            <h5 class="card-title">{{documentario.nome}}</h5>
            <p
              class="card-text"
            >{{ documentario.descricao }}</p>
            <a href="#" class="btn btn-warning">watchIt</a>
          </div>
        </div>
      </div>

      <!-- <div class="col-3" v-for="documentario of documentarios">
        <div class="card cartao-documentarios">
          <img class="card-img-top" v-bind:src="documentario.imagem" alt="Imagem de capa do card" />
          <div class="card-body">
            <h5 class="card-title">{{ documentario.nome }}</h5>
            <p class="card-text">
              {{ documentario.descricao }}
            </p>
            <div class="row justify-content-center">
              <a href="#" class="btn btn-warning">Watch it</a>
            </div>
          </div>
        </div>
      </div>-->
    </div>
  </div>
</template>

<script>
import NavBar from "../shared/NavBar/NavBar.vue";
export default {
  data() {
    return {
      documentarios: []
    };
  },

  components: {
    NavBar: NavBar
  },

  created() {
    this.$http
      .get("http://localhost/apitrabalhopbd/listar-documentarios.php")
      .then(res => res.json())
      .then(documentarios => (this.documentarios = documentarios), err => console.log(err));
  }
};
</script>

<style scoped>
.cartao-documentarios {
  max-width: 200px;
  max-height: 350px;
}

.card-text {
  overflow: visible;
}
</style>