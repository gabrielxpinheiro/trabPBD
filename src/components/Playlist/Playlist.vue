<template>
  <div class="container">
    <NavBar></NavBar>
    <div class="row"></div>
    <p>
      <a
        class="btn btn-warning"
        data-toggle="collapse"
        href="#collapseExample"
        role="button"
        aria-expanded="false"
        aria-controls="collapseExample"
      >Criar PlayList</a>
    </p>
    <div class="collapse col-3 mb-2" id="collapseExample">
      <div class="card card-body">
        <div class="form-group">
          <label for="exampleInputEmail1">Nome da playlist</label>
          <input type="text" class="form-control" id="exampleInputEmail1" v-model="nomePlaylist" />
        </div>
        <button class="btn btn-primary" @click="criarPlaylist">Criar</button>
      </div>
    </div>

    <div class="row">
      <div class="col-9 mt-2 mb-2">
        <div class="alert alert-primary playlistsSeguidas" role="alert">Minhas Playlists</div>
      </div>
    </div>

    <div class="row">
      <div class="card mb-2 mr-2" style="width: 18rem;" v-for="playlist of playlists">
        <div class="card-body">
          <h5 class="card-title">{{ playlist.nome }}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{{ playlist.data_criacao | formatDate }}</h6>
          <button
            @click="acessarPlaylist(playlist.id)"
            class="btn btn-outline-warning"
          >Acessar PlayList</button>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-9 mt-2 mb-2">
        <div class="alert alert-primary playlistsSeguidas" role="alert">Playlists Seguidas</div>
      </div>
    </div>

    <div class="row mb-5">
      <div
        class="card mb-2 mr-2"
        style="width: 18rem;"
        v-for="playlistSeguida of playlistsSeguidas"
      >
        <div class="card-body">
          <h5 class="card-title">{{ playlistSeguida.nome }}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{{ playlistSeguida.data_criacao | formatDate }}</h6>
          <h6 class="card-subtitle mb-2 text-muted">{{ playlistSeguida.usuario_criador }}</h6>
          <button
            @click="acessarPlaylist(playlistSeguida.id_playlist)"
            class="btn btn-outline-warning"
          >Acessar PlayList</button>
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
      nomePlaylist: "",
      playlists: [],
      playlistsSeguidas: []
    };
  },
  components: {
    NavBar: NavBar
  },

  computed: {
    ...mapState(["nome_usuario"])
  },

  methods: {
    criarPlaylist() {
      this.$http
        .post("http://localhost/apitrabalhopbd/nova-playlist.php", {
          nome: this.nomePlaylist,
          nome_usuario: this.nome_usuario
        })
        .then(response => {
          this.buscarPlaylist();
        });
    },

    acessarPlaylist(id_playlist) {
      this.$store.commit("CHANGE_ID_PLAYLIST", id_playlist);
      this.$router.push("/PlaylistUsuario");
    },

    buscarPlaylist() {
      this.$http
        .post("http://localhost/apitrabalhopbd/listar-playlist-usuario.php", {
          usuario_criador: this.nome_usuario
        })
        .then(res => res.json())
        .then(
          playlists => (this.playlists = playlists),
          err => console.log(err)
        );
    }
  },

  filters: {
    formatDate: function(value) {
      return moment(String(value)).format("DD-MM-YYYY");
    }
  },

  created() {
    this.buscarPlaylist();

    this.$http
      .post("http://localhost/apitrabalhopbd/listar-playlists-seguidas.php", {
        nome_usuario: this.nome_usuario
      })
      .then(res => res.json())
      .then(
        playlistsSeguidas => (this.playlistsSeguidas = playlistsSeguidas),
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