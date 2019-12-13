<template>
  <div class="container">
    <NavBar></NavBar>

    <div class="row">
      <div class="col-9 mt-2 mb-2">
        <div class="alert alert-primary playlistsSeguidas" role="alert">Playlists globais</div>
      </div>
    </div>

    <div class="row">
      <div class="card mb-2 mr-2" style="width: 18rem;" v-for="playlist of playlists">
        <div class="card-body">
          <h5 class="card-title">{{ playlist.nome }}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{{ playlist.data_criacao | formatDate }}</h6>
          <h6 class="card-subtitle mb-2 text-muted">{{ playlist.usuario_criador }}</h6>
          <button
            @click="acessarPlaylist(playlist.id)"
            class="btn btn-outline-warning"
          >Acessar PlayList</button>
          <button
            @click="seguirPlaylist(playlist.id)"
            class="btn btn-outline-warning"
          >+ Seguir</button>
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
      playlists: [],
    };
  },
  components: {
    NavBar: NavBar
  },

  computed: {
    ...mapState(["nome_usuario"])
  },

  methods: {

    acessarPlaylist(id_playlist) {
      this.$store.commit("CHANGE_ID_PLAYLIST", id_playlist);
      this.$router.push("/PlaylistUsuario");
    },

    seguirPlaylist(id_playlist){
        this.$http
      .post("http://localhost/apitrabalhopbd/seguir-playlist.php", {
        nome_usuario: this.nome_usuario,
        id_playlist: id_playlist
      });
    }

  },

  filters: {
    formatDate: function(value) {
      return moment(String(value)).format("DD-MM-YYYY");
    }
  },

  created() {

    this.$http
      .post("http://localhost/apitrabalhopbd/listarTodasPlaylists.php", {
        nome_usuario: this.nome_usuario
      })
      .then(res => res.json())
      .then(
        playlists => (this.playlists = playlists),
        err => console.log(err)
      );
  }
};
</script>

<style>
.playlistsSeguidas {
  text-align: center;
}
</style>