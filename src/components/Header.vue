<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark" role="navigation">
  <div class="container">
    <!-- Brand and toggle get grouped for better mobile display -->
    <router-link to="#" class="navbar-brand mr-auto">Online Store</router-link>
    <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTop"
        aria-controls="navbarTop"
        aria-expanded="false"
        aria-label="Toggle navigation"
        >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarTop">
      <ul class="navbar-nav mr-auto">

      </ul>
      <ul class="nav navbar-nav">
        <router-link to="/entrar" tag="li" class="nav-item" active-class="active">
          <a class="nav-link">Entrar</a>
        </router-link>
        <li  class="li-pointer nav-item">
          <a  class="nav-link">Sair {{ usuarioEmail }}</a>
        </li>
        <router-link to="/cadastrar" tag="li" class="nav-item" active-class="active">
          <a class="nav-link">Cadastrar</a>
        </router-link>
        <li>
          <router-link to="/carrinho" class="btn btn-success navbar-btn" tag="button">
            Confira <span class="badge badge-light"></span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
  <!-- /.container -->
</nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters(['isLoggedIn', 'AtualUsuario']),
    usuarioEmail() {
      return this.isLoggedIn ? this.AtualUsuario.email : ''
    }
  }
}
</script>

<style>

</style>