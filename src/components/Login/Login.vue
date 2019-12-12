<template>
  <div class="container">
    <div class="row justify-content-center mt-5">
      <div class="col-5">
        <img class="logo mt-4" src="src\images\logo.png" alt="logo" />
      </div>
      <div class="login-conta col-7 mt-5">
          <div class="col-10 mb-3">
            <h2>Faça seu login</h2>
          </div>
          <div class="col-10">
            <label class="sr-only" for="inlineFormInputGroupUsername">Usuário</label>
            <div class="input-group">
              <div class="input-group-prepend">
                <div class="input-group-text">#</div>
              </div>
              <input
                type="text"
                class="form-control"
                id="inlineFormInputGroupUsername"
                v-model="inputUsuarioLogin"
                placeholder="Usuário"
              />
            </div>
          </div>

          <div class="col-10 mt-3">
            <label class="sr-only" for="inlineFormInputSenha">Senha</label>
            <input
              type="password"
              class="form-control"
              id="inlineFormInputSenha"
              v-model="inputSenhaLogin"
              placeholder="Senha"
            />
          </div>
          <div class="col-12 mt-3">
            <button class="btn btn-outline-warning" @click="entrar">Entrar</button>
          </div>
          <div class="col-12 mt-3">
            <label class="cadastro">Ainda não tem cadastro ?</label>
            <router-link class="criar-cadastro" to="/cadastro">Criar cadastro</router-link>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputUsuarioLogin: "",
      inputSenhaLogin: ""
    };
  },

  methods: {
    entrar() {
      this.$http
        .post("http://localhost/apitrabalhopbd/validar-usuario.php", {
          nome_usuario: this.inputUsuarioLogin,
          senha: this.inputSenhaLogin
        }).then(response => {
          this.$store.commit("CHANGE_NOME_USUARIO", response.body)
          this.$router.push("/Home");
        }, response =>{
          alert(response.body.mensagem)
          this.$router.push("/")
        })
      
    }
  }
};
</script>

<style scoped>
.logo {
  height: 400px;
  width: 400px;
}
.cadastro {
  color: white;
}

.login-conta {
  padding-top: 80px;
}

h2{
  color: white;
}

.criar-cadastro{
  color: rgb(255, 238, 0);
}
</style>