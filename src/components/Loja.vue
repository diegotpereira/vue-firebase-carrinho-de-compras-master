<template>
  <div class="container" :class="{carregarItem: produtoEstaCarregando}">
  <div class="row text-center" v-if="produtoEstaCarregando">
    <grid-loader :loading="produtoEstaCarregando" :color="loaderColor" :size="loaderSize"></grid-loader>
  </div>
  <div v-else class="row action-panel">
    <div class="col-12">
      <div class="btn-group btn-group-sm pull-right">
				<button id="list" class="btn btn-outline-dark" @click.prevent="alterarTela(true)">
          <i class="fa fa-list" aria-hidden="true"></i> List
				</button>
				<button id="grid" class="btn btn-outline-dark" @click.prevent="alterarTela(false)">
          <i class="fa fa-th" aria-hidden="true"></i> Grid
				</button>
      </div>
    </div>
  </div>

  <div class="row" v-if="!produtoEstaCarregando">
    <app-produto-item v-for="prod in produtos" :item="prod" :key="prod.id" :displayList="displayList"></app-produto-item>
  </div>
</div>
</template>

<script>
import { mapGetters} from 'vuex'
import ProdutoItem from './product/ProdutoItem.vue'
import GridLoader from 'vue-spinner/src/GridLoader.vue'
export default {
    data() {
        return {
            loaderColor: "#5cb85c",
            loaderSize: "50px",
            displayList: false
        }
    },
    computed: {
        ...mapGetters(['produtos', 'produtoEstaCarregando']),
    },
    components: {
        appProdutoItem: ProdutoItem,
        GridLoader
    },
    methods: {
        alterarTela(ehLista) {
            this.displayList = ehLista
        }
    }
}
</script>

<style>
.carregarItem {
  align-items: center;
  justify-content: center;
  display: flex;
}

.action-panel {
  margin-bottom: 10px;
  margin-right: 5px;
}
</style>