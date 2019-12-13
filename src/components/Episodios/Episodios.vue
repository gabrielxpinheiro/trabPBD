<template>
  <div class="container">
    <NavBar></NavBar>
    <div class="row listagem-conteudo">

      <div class="card-deck " v-for="episodio of episodios">
      <div class="card mt-3 ml-5" style="max-width: 15rem;">
          <div class="card-body">
            <h5 class="card-title">{{ episodio.num_episodio }} -  {{episodio.nome}}</h5>
            <div class="row align-items-end">
              <div class="col-md-12 mb-2">
                <button class="btn btn-warning mt-2">Watchit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../shared/NavBar/NavBar.vue";
import { mapState } from "vuex";
export default {
  data() {
    return {
        episodios: [],
    };
  },

  components: {
    NavBar: NavBar
  },

  computed: {
    ...mapState(["num_temporada", "id_serie"])
  },

  created() {

      this.$http
      .post("http://localhost/apitrabalhopbd/listar-episodios.php", {
        temporada: this.num_temporada,
        id_serie: this.id_serie

      })
      .then(res => res.json())
      .then(episodios => (this.episodios = episodios), err => console.log(err));
  },

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