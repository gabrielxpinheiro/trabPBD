<template>
  <div class="container">
    <NavBar></NavBar>
    <div class="row listagem-conteudo">

      <div class="card-deck " v-for="temporada of temporadas">
      <div class="card mt-3 ml-5" style="max-width: 15rem;">
          <div class="card-body">
            <h5 class="card-title">{{temporada.temporada}}ª Temporada</h5>
            <div class="row align-items-end">
              <div class="col-md-12 mb-2">
                <button class="btn btn-warning mt-2" @click="guardarTemporada(temporada.temporada)">Acessar</button>
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
        temporadas: [],
    };
  },

  components: {
    NavBar: NavBar
  },

  computed: {
    ...mapState(["id_serie"])
  },

  created() {

      this.$http
      .post("http://localhost/apitrabalhopbd/listar-temporadas.php", {
        id_serie: this.id_serie
      })
      .then(res => res.json())
      .then(temporadas => (this.temporadas = temporadas), err => console.log(err));
  },

  methods: {
      guardarTemporada(temporada){
        this.$store.commit("CHANGE_NUMERO_TEMPORADA", temporada)
        this.$router.push("/Episodios");
      }
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