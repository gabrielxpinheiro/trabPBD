<template>
  <div class="container">
    <NavBar></NavBar>
    
    <div class="row listagem-conteudo">
      <div class="card-deck " v-for="midia of midias">
      <div class="card mt-3 ml-5" style="max-width: 15rem;">
          <img class="card-img-top" v-bind:src="midia.imagem" alt="Imagem de capa do card" />
          <div class="card-body">
            <h5 class="card-title">{{midia.nome}}</h5>
            <p
              class="card-text"
            >{{ midia.descricao }}</p>
            <a href="#" class="btn btn-warning">watchIt</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../shared/NavBar/NavBar.vue";
import { mapState } from "vuex";
import moment from "moment";
export default {
  data() {
    return {
      midias: []
    };
  },

  computed: {
    ...mapState(["id_playlist"])
  },

  components: {
    NavBar: NavBar
  },

  created() {
      this.$http
      .post("http://localhost/apitrabalhopbd/listar-midias-playlist.php",{
        id_playlist: this.id_playlist
      })
      .then(res => res.json())
      .then(midias => (this.midias = midias), err => console.log(err));
  },

  filters:{
    formatDate: function(value){
      return moment(String(value)).format("DD-MM-YYYY");
    }
  },
};
</script>

<style scoped>
.cartao-filmes {
  max-width: 200px;
  max-height: 350px;
}

.card-text {
  overflow: visible;
}
</style>