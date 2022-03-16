<template>
<div :class="(exibirMensagemBar?'':'d-none') + ' message-bar'">
  <div :class="mensagemClasse">
    <Button bsStyle='link' class="btn btn-link close-btn" @click="fecharMensagemBar">
      <i class="fa fa-times"></i>
    </Button>
    <div>{{ atualMensagem }}</div>
  </div>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
	computed: {
		...mapGetters(['mensagens']),
		exibirMensagemBar() {
			return this.mensagens.mensagem && this.mensagens.mensagem.length > 0
		},
		mensagemClasse() {
			let mgClasse = this.mensagens.mensagemClasse

			return "col-12 panel panel-" + mgClasse + " " + (this.exibirMensagemBar ? "" : "hidden")
		},
		atualMensagem() {
			return this.mensagens.mensagem
		}
	},
	methods: {
		...mapActions(['limparMensagem']),
		fecharMensagemBar() {
			this.limparMensagem()
		}
	}
}
</script>

<style scoped>
.message-bar {
  position: fixed;
  top: 0;
  left: 50%;
  width: 50%;
  min-height: 50px;
  z-index: 9999;
  margin-left: -25%;
}

.message-bar .close-btn {
  position: absolute;
  top: 0;
  right: 0;
  color: #FFF;
}

.message-bar .panel {
  border-color: transparent;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  padding-right: 25px;
}

.panel {
  padding: 10px 15px;
}

.panel-danger {
  background-color: #d9534f;
  color: #FFF;
}

.panel-success {
  background-color: #5cb85c;
  color: #FFF;
}

.panel-warning {
  background-color: #f0ad4e;
  color: #FFF;
}