<template>
  <div class="container">
    <NavBar></NavBar>
    <div class="row listagem-conteudo">

      <div class="card-deck " v-for="documentario of documentarios">
      <div class="card mt-3 ml-5" style="max-width: 15rem;">
          <img class="card-img-top" v-bind:src="documentario.imagem" alt="Imagem de capa do card" />
          <div class="card-body">
            <h5 class="card-title">{{documentario.nome}}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ documentario.duracao }}</h6>
            <h6 class="card-subtitle mb-2 text-muted">{{ documentario.genero }}</h6>
            <h6 class="card-subtitle mb-2 text-muted">Nota: {{ documentario.avaliacao }}</h6>
            <h6 class="card-subtitle mb-2 text-muted">{{ documentario.classificacao | cassificacao}}</h6>
            <p
              class="card-text"
            >{{ documentario.descricao }}</p>
            <div class="row align-items-end">
              <div class="col-md-12 mb-2">
                <a href="#" class="btn btn-warning">watchIt</a>
              </div>
              <p class="escolhaPlayList">Adicione em uma playlist</p>
              <select class="custom-select mr-2 botao-horario" v-model="idPlaylist">
                <option v-for="playlist of playlists" v-bind:value="playlist.id" selected>{{ playlist.nome }}</option>
              </select>
              <button class="btn btn-outline-warning mt-2" @click="addInPlaylist(idPlaylist, documentario.id)">+ playlist</button>
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
      documentarios: [],
      playlists: [],
      idPlaylist: '',
    };
  },

  components: {
    NavBar: NavBar
  },

  computed: {
    ...mapState(["nome_usuario"])
  },

  created() {
    this.$http
      .get("http://localhost/apitrabalhopbd/listar-documentarios.php")
      .then(res => res.json())
      .then(documentarios => (this.documentarios = documentarios), err => console.log(err));


      this.$http
      .post("http://localhost/apitrabalhopbd/listar-playlist-usuario.php", {
        usuario_criador: this.nome_usuario
      })
      .then(res => res.json())
      .then(playlists => (this.playlists = playlists), err => console.log(err));
  },

  methods: {
    addInPlaylist(idPlaylist, iddocumentario) {
      this.$http
      .post("http://localhost/apitrabalhopbd/inserir-midia-playlist.php", {
        id_playlist: idPlaylist,
        id_contratado: iddocumentario
      })
      .then(res => res.json())
      alert(res.mensagem);

    }
  },
  filters: {
    cassificacao: function(value) {
      return value == 0 ? 'Livre' : `+ ${value}`;
    }
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