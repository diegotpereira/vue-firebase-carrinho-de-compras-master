<template>
	<div class="container">
		<div class="col-md-12" v-for="(item, index) in produtos" :key="index">
			<div v-if="produtoEstaCarregando" class="text-center">
				<grid-loader :loading="produtoEstaCarregando" :color="loaderColor" :size="loaderSize" class="d-inline-block" />
			</div>
			<div v-else class="card">
				<div class="row">
					<div class="col-12 col-md-4 offset-md-4">
						<div class="intrinsic">
							<img class="img-fluid intrinsic-item" :src="item.thumbnail_url" alt="">
						</div>
					</div>
				</div>
				<div class="caption-full">
					<h4 class="pull-right"> R$ {{ item.preco }}</h4>
					<h4> {{ item.titulo }}</h4>
					<p> {{ item.descricao }}</p>
				</div>
				<div class="ratings">
					<span> {{ item.quantidade }} disponiveis em estoque</span>
					<p class="pull-right">
						<button @click="addItem" :disabled="item.quantidade === 0" class="btn btn-success">
							Add Carrinho
						</button>
					</p>
					<div class="clearfix"></div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import GridLoader from 'vue-spinner/src/GridLoader.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
	components: {
		GridLoader
	},
	data() {
		return {
			loaderColor: "#5cb85c",
			loaderSize: "50px",
		}
	},
	computed: {
		...mapGetters(['produtoEstaCarregando', 'produtos']),
		item() {
			let id = this.$route.params.id 

			if(this.produtos.length >= id) {
				let filtroArr = this.produtos.filter((item) => {
					return item.id == id 
				})
				if (filtroArr.length > 0) {
					return filtroArr[0]
				}
			}
			return {}
		}
	},
	methods: {
		...mapActions(['atualizarCarrinho']),
		addItem() {
			const pedido = {
				item: Object.assign({}, this.item),
				quantidade: 1,
				isAdd: true 
			}
			this.atualizarCarrinho(pedido)
		}
	}
}
</script>
<style scoped>
.caption-full {
  padding-right: 10px;
  padding-left: 10px;
}

.ratings {
  padding-right: 10px;
  padding-left: 10px;
  color: #d17581;
}
</style>