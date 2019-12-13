import Home from './components/Home/Home.vue';
import Cadastro from './components/Cadastro/Cadastro.vue';
import Filmes from './components/Filmes/Filmes.vue';
import Login from './components/Login/Login.vue';
import Documentarios from './components/Documentarios/Documentarios.vue';
import Series from './components/Series/Series.vue';
import Playlist from './components/Playlist/Playlist.vue';
import PlaylistUsuario from './components/PlaylistUsuario/PlaylistUsuario.vue';
import Temporadas from './components/Temporadas/Temporadas.vue';
import Episodios from './components/Episodios/Episodios.vue';
import UsuariosPlaylists from './components/UsuariosPlaylists/UsuariosPlaylists.vue'


export const routes = [
    { path: '', component: Login },
    { path: '/PlaylistUsuario', component: PlaylistUsuario },
    { path: '/Episodios', component: Episodios },
    { path: '/UsuariosPlaylists', component: UsuariosPlaylists },
    { path: '/Temporadas', component:Temporadas },
    { path: '/Documentarios', component: Documentarios },
    { path: '/Home', component: Home },
    { path: '/Cadastro', component: Cadastro },
    { path: '/Filmes', component: Filmes },
    { path: '/Series', component: Series},
    { path: '/Playlist', component: Playlist },

];  