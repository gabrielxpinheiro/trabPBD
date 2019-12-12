<template>
  <div class="container">
    <div class="row justify-content-center">
      <img class="logo" src="src\images\logo.png" alt="logo" />
    </div>
    <div class="row justify-content-center">
      <div class="col-lg-8 cadastro">
        <div class="form-row">
          <div class="col-md-12 mb-3">
            <label for="validationDefault01">Nome</label>
            <input
              type="text"
              class="form-control"
              id="vali<form>dationDefault01"
              placeholder="Nome"
              v-model="inputNome"
              required
            />
          </div>
          <div class="col-md-12">
            <label for="exampleInputEmail1">Endereço de email</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Seu email"
              v-model="inputEmail"
              required
            />
            <small
              id="emailHelp"
              class="form-text text-muted"
            >Nunca vamos compartilhar seu email, com ninguém.</small>
          </div>
        </div>
        <div class="form-row mt-2">
          <div class="col-md-6 mb-3">
            <label for="validationDefaultUsername">Usuário</label>
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroupPrepend2">#</span>
              </div>
              <input
                type="text"
                class="form-control"
                id="validationDefaultUsername"
                placeholder="Usuário"
                aria-describedby="inputGroupPrepend2"
                v-model="inputUsuario"
                required
              />
            </div>
          </div>
          <div class="col-md-6 mb-3">
            <label>Senha</label>
            <input
              type="password"
              class="form-control"
              placeholder="Senha"
              v-model="inputSenha"
              required
            />
          </div>
        </div>
        <div class="row justify-content-center mt-3">
          <button class="btn btn-outline-warning" @click="cadastro">Enviar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputNome: "",
      inputEmail: "",
      inputUsuario: "",
      inputSenha: "",
      resposta: ""
    };
  },

  methods: {
    cadastro() {
      this.$http
        .post("http://localhost/apitrabalhopbd/cadastro-usuario.php", {
          nome: this.inputNome,
          email: this.inputEmail,
          nome_usuario: this.inputUsuario,
          senha: this.inputSenha
        })
        .then(
          response => {
            if (response.status === 201) {
              alert(response.body.mensagem);
              this.$router.push("/");
            }
          },
          response => {
            console.log(response)
            alert(response.body.mensagem);
          }
        );
    }
  }
};
</script>

<style scoped>
.cadastro {
  background-color: #343a40;
  padding: 50px;
  border-radius: 10px;
  color: white;
}

.logo {
  height: 200px;
  width: 200px;
}
</style>