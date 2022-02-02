<template>
  <div class="d-flex flex-column sticky-footer-wrapper">
    <main class="flex-fill">
      <app-header></app-header>
      <!-- <message-component></message-component> -->
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
              <a href="https://github.com/ittus/vuejs-firebase-shopping-cart" target="_blank">
              https://github.com/ittus/vuejs-firebase-shopping-cart
            </a></p>
      </div>
    </footer>
</div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue';
export default {
  name: 'App',
  components: {
    // HelloWorld
    appHeader: Header
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
