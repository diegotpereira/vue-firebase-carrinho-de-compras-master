<template>
  <div class="d-flex flex-column sticky-footer-wrapper">
    <main class="flex-fill">
      <app-header></app-header>
      <mensagem-componente></mensagem-componente>
      <div class="container mt-3">
          <div class="row">
            <div class="col-md-12">
              <router-view></router-view>
              <div class="card panel-warning d-none d-sm-flex" id="reset-store-panel">
                <div class="card-header">Painel de administração (Objetivo do teste)</div>
                  <div class="card-body text-center">
                    <button class="btn btn-warning">Redefinir loja</button>
                  </div>
              </div>
            </div>
          </div>
      </div>
    </main>

    <footer class="navbar-default navbar-bottom navbar-dark bg-dark">
      <div class="container-fluid">
            <p class="text-center nav-bar mb-0">Verifique o Repositório em 
              <a href="https://github.com/diegotpereira/vue-firebase-carrinho-de-compras-master" target="_blank">
              https://github.com/diegotpereira/vue-firebase-carrinho-de-compras-master
            </a></p>
      </div>
    </footer>
</div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue';
import { mapActions } from 'vuex'
import MensagemComponente from './components/common/MensagemComponente.vue';
export default {
  name: 'App',
  components: {
    // HelloWorld
    appHeader: Header,
    MensagemComponente
  },
  methods: {
      ...mapActions(['getCarrinhoCompras','buscarListaDeProdutos'])
  },
  created() {
    let uid = this.$store.getters.atualUsuario.uid
    this.buscarListaDeProdutos()
	this.getCarrinhoCompras({uid, atualCarrinho: this.$store.getters.carrinhoItemLista})
  }
}
</script>

<style>
 #reset-store-panel {
    position: fixed; bottom: 0px; right: 0px;
  }

  body, .sticky-footer-wrapper {
     min-height:100vh;
  }

  .flex-fill {
     flex:1 1 auto;
  }
  footer {
    height: 40px;
    color: #666;
    padding: 10px 0 10px 0;
    font-size: 85%;
  }
  footer a {
    color: #999;
  }
  footer a:hover {
    color: #efefef;
  }
  @media (max-width: 576px) {
    footer {
      height: 50px;
    }
  }
</style>
