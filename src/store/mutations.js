export default {

    'CHANGE_NOME_USUARIO' (state, payload){
        state.nome_usuario = payload
    },
    'CHANGE_ID_PLAYLIST' (state, playload){
        state.id_playlist = playload
    },
    'CHANGE_ID_SERIE' (state, playload){
        state.id_serie = playload
    },
    'CHANGE_NUMERO_TEMPORADA' (state, playload){
        state.num_temporada = playload
    },

}