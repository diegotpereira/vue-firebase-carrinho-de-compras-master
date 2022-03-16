<template>
	<tr>
		<td data-th="Produto">
			<div class="row">
				<div class="col-sm-2 d-none d-sm-block">
					<img :src="carrinhoItem.thumbnail_url" alt="..." class="img-fluid" />
				</div>
				<div class="col-sm-10">
					<h4 class="nomargin"> {{ carrinhoItem.titulo }}</h4>
					<p>{{ carrinhoItem.descricao }}</p>
				</div>
			</div>
		</td>
		<td data-th="Preco"> {{ carrinhoItem.preco }}</td>
		<td data-th="Quantidade">
			<input type="number" class="form-control text-center"
				:value="carrinhoItem.quantidade"
				@input="atualizarQuantidade"
				min="0">
		</td>
		<td data-th="Subtotal" class="text-center">R$ {{ subtotal }}</td>
		<td class="actions" data-th="">
			<button class="btn btn-danger btn-sm" @click="removerItem"><i class="fa fa-trash-o"></i></button>
		</td>
	</tr>
</template>

<script>
import { mapActions } from 'vuex'
export default {
	props: ['carrinhoItem'],
	computed: {
		subtotal() {
			return this.carrinhoItem.quantidade * this.carrinhoItem.preco
		}
	},
	methods: {
		...mapActions(['atualizarCarrinho', 'removerItemNoCarrinho']),
		removerItem() {
			let vm = this 
			this.removerItemCarro({
				item: vm.carrinhoItem
			})
		},
		atualizarQuantidade(event) {
			let vm = this
			this.atualizarCarrinho({
				item: vm.carrinhoItem,
				quantidade: parseInt(event.target.value),
				isAdd: false
			})
		}
	}
}
</script>

<style>

</style>