<template>
   <div class="row">
       <div class="col-md-6 offset-md-3 col-sm-12 offset-sm-1">
           <form id="login-form" role="form" style="display: block;" @submit.prevent="entrar">
        <h3 class="text-center">Entrar</h3>
        <div class="form-group">
          <input
            type="email"
            name="email"
            id="email"
            class="form-control"
            placeholder="Endereço de Email"
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
          <button type="submit" class="btn btn-success" style="width: 100%" :disabled="estaCarregando">
            <i v-if="estaCarregando" class="fa fa-spinner fa-spin" />
            Entrar
          </button>
        </div>
        <div class="form-group">
          <div class="row">
            <div class="col-lg-12">
              <div class="text-center">
                <router-link to="/cadastrar">
                  <a>Cadastre-se</a>
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
            estaCarregando: false
            
        }
    },
    methods: {
        ...mapActions(['entrarComEmail']),
        entrar() {
            this.estaCarregando = true
            let dado = {
                email: this.email,
                password: this.password
            }
            this.entrarComEmail(dado).then(() => {
                this.$router.push({
                    name: 'paginaprincipal'
                })
            }).catch((error)=> {
                console.log(error);
            }).then(()=> {
                this.estaCarregando = false
            })
        }
    }

}
</script>

<style>

</style>