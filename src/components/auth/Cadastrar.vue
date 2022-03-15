<template>
  <div class="row">
    <div class="col-md-6 offset-md-3 col-sm-10 offset-sm-1">
      <form id="register-form" role="form" @submit.prevent="onSubmit">
        <h3 class="text-center">Cadastre-se</h3>
        <div class="form-group">
          <input
            type="email"
            name="email"
            id="email"
            class="form-control"
            placeholder="Endereço de Email"
            value
            v-model="email"
            required
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            name="password"
            id="password"
            class="form-control"
            placeholder="Senha"
            v-model="password"
            required
          />
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-success" style="width: 100%">
            <i  class="fa fa-spinner fa-spin" />
            Cadastrar
          </button>
        </div>
        <div class="form-group">
          <div class="row">
            <div class="col-lg-12">
              <div class="text-center">
                <router-link to="/entrar">
                  <a>Entrar</a>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data() {
        return {
            email: '',
            password: '',
            //estaCarregando: false
        } 
    },
    methods: {
        ...mapActions(['cadastrarSeuEmail']),
        onSubmit() {
            //this.estaCarregando = true

            let dado = {
                email: this.email,
                password: this.password
            }
            this.cadastrarSeuEmail(dado).then(() => {
                this.$router.push({ name: 'paginaprincipal'})

            })
        }
    }
}
</script>

<style>

</style>