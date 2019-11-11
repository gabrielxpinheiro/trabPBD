<template>
  <div class="container">
    <div class="row justify-content-center">
      <img class="logo" src="src\images\logo.png" alt="logo" />
    </div>
    <div class="row justify-content-center">
      <div class="col-lg-8 cadastro">
        <form>
          <div class="form-row">
            <div class="col-md-4 mb-3">
              <label for="validationDefault01">Primeiro nome</label>
              <input
                type="text"
                class="form-control"
                id="validationDefault01"
                placeholder="Nome"
                value="João"
                required
              />
            </div>
            <div class="col-md-4 mb-3">
              <label for="validationDefault02">Sobrenome</label>
              <input
                type="text"
                class="form-control"
                id="validationDefault02"
                placeholder="Sobrenome"
                value="Silva"
                required
              />
            </div>
            <div class="col-md-4 mb-3">
              <label for="validationDefault02">Data Nascimento</label>
              <input type="date" class="form-control" id="validationDefault02" required />
            </div>
            <div class="col-md-12">
              <label for="exampleInputEmail1">Endereço de email</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Seu email"
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
                  required
                />
              </div>
            </div>
            <div class="col-md-6 mb-3">
              <label>Senha</label>
              <input type="password" class="form-control" placeholder="Senha" required />
            </div>
          </div>
          <div class="row justify-content-center mt-3">
            <button class="btn btn-outline-warning" type="submit">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
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