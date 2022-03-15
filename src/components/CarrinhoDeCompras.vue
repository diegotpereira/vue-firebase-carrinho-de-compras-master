<template>
	<div class="container table-responsive">
		<table id="cart" class="table table-hover table-sm">
			<thead>
				<tr>
					<th style="width: 50%">Produto</th>
					<th style="width: 10%">Preço</th>
					<th style="width: 8%">Quantidade</th>
					<th style="width: 22%" class="text-center">Subtotal</th>
					<th style="width: 10%"></th>
				</tr>
			</thead>

			<transition-group name="list-shopping-cart">
				<app-carrinho-item
				v-for="carrinhoItem in carrinhoItemLista"
				:carrinhoItem="carrinhoItem"
				:key="carrinhoItem.id">
				</app-carrinho-item>
			</transition-group>
			<tfoot>
				<tr class="d-table-row d-sm-none">
					<td class="text-center">
						<strong>Total R$ {{carrinhoValor}}</strong>
					</td>
				</tr>
				<tr>
					<td>
						<button class="btn btn-warning" @click="salvarCarrinhoComprasLocal">
							<i class="fa fa-angle-left"></i>Salvar e continuar comprando
						</button>
					</td>
					<td colspan="2" class="d-none d-sm-table-cell"></td>
					<td class="d-none d-sm-table-cell text-center">
						<strong>Total R$ {{carrinhoValor}}</strong>
					</td>
					<td class="px-0">
						<button class="btn btn-success" @click="verificar">
							<span class="text-nowwrap">
								Confirmar
								<i class="fa-fa-angle-right d-inline"></i>
							</span>
						</button>
					</td>
				</tr>
			</tfoot>
		</table>
	</div>
</template>
<script>
import { mapActions, mapGetters} from 'vuex'
import CarrinhoItem from './carrinho/CarrinhoItem.vue'
export default {
	computed: {
		...mapGetters([
			'carrinhoItemLista',
			'estaLogado',
			'produtos',
			'atualUsuario',
			'carrinhoValor'
		]),
	},
	components: {
		appCarrinhoItem: CarrinhoItem,
	},
	methods: {
		...mapActions([
			'salvarCarrinhoCompras',
			'addMensagem',
			'salvarNaTransacao',
			'limparCarrinho'
		]),
		verifiqueCarrinhoValido(itemLista, prodLista) {
			let ehValido = true
			let mensagem = ''

			itemLista.map((item) => {
				for(let prodIdx = 0; prodIdx < prodLista.length; prodIdx++) {
					if (prodLista[prodIdx].id == item.id) {
						if (prodLista[prodIdx].quantidade < item.quantidade) {
							mensagem = `Apenas ${prodLista[prodIdx].quantidade} ${item.titulo} disponível em estoque`
							ehValido = false 

							return 
						}
						break
					}
				}
			})
			return {
				ehValido,
				mensagem
			}
		},
		salvarCarrinhoComprasLocal() {
			if (this.estaLogado) {
				let { ehValido, mensagem} = this.verifiqueCarrinhoValido(
					this.carrinhoItemLista,
					this.produtos
				)
				if (ehValido) {
					this.salvarCarrinhoCompras({
						carrinhoItemLista: this.carrinhoItemLista,
						uid: this.atualUsuario.uid,
					}).then(()=> {
						this.addMensagem({
							mensagemClasse: 'success',
							mensagem: 'Seu carrinho de compras foi salvo com sucesso',
						})
						this.$router.push('/')
					})
				} else {
					this.addMensagem({
						mensagemClasse: 'danger',
						mensagem: mensagem,
					})
				}
			} else {
				this.addMensagem({
					mensagemClasse: 'danger',
					mensagem: 'Por favor, faça o login para salvar seu carrinho',
				})
			}
		},
		verificar() {
			if (this.estaLogado) {
				if (!this.carrinhoItemLista || this.carrinhoItemLista.length == 0) {
					this.addMensagem({
						mensagemClasse: 'danger',
						mensagem: 'Seu carrinho está vazio!',
					})
					return
				}
				let { ehValido, mensagem} = this.verifiqueCarrinhoValido(
					this.carrinhoItemLista,
					this.produtos
				)
				if (ehValido) {
					this.salvarNaTransacao({
						carrinhoItemLista: this.carrinhoItemLista,
						uid: this.atualUsuario.uid
					}).then(()=> {
						this.addMensagem({
							mensagemClasse: 'success',
							mensagem: 'Seu pedido foi processado com sucesso!',
						})
						this.salvarCarrinhoCompras({
							carrinhoItemLista: [],
							uid: this.atualUsuario.uid,
						})
						this.limparCarrinho()
						this.$router.push('/')
					})
				} else {
					this.addMensagem({
						mensagemClasse: 'danger',
						mensagem: mensagem,
					})
				}
			} else {
				this.addMensagem({
					mensagemClasse: 'warning',
					mensagem: 'Por favor, faça o login para finalizar a compra',
				})
			}
		},
	},
}
</script>

<style lang="scss" scoped>
.list-shopping-cart-leave-active {
  transition: all 0.4s;
}

.list-shopping-cart-leave-to {
  opacity: 0;
  transform: translateX(50px);
}

.table-sm {
  font-size: 0.875rem;
  ::v-deep h4 {
    font-size: 1.25rem;
  }
}
</style>