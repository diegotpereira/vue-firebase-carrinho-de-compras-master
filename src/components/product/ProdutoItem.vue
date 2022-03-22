<template>
  <div class="mb-3 col-sm-6 col-md-4 item" :class="{'list-group-item': displayList}">
  <div class="thumbnail card">
    <div class="img-event intrinsic">
      <img :src="item.thumbnail_url" alt="" class="grow thumbnail-image card-img-top intrinsic-item p-3">
    </div>
    <div class="card-body">
      <router-link :to="'/produto/' + item.id" tag="h5" class="card-title"><a>{{ item.titulo }}</a></router-link>
      <h6 class="card-subtitle mb-2 remain">{{ item.quantidade }} quantidade(s) em estoque</h6>

      <p class="card-text truncate">{{ item.descricao | curtaDescricao}}</p>

      <div class="row">
        <p class="col-6 lead">R${{ item.preco }}</p>
        <p class="col-6">
          <button class="btn btn-success pull-right" :disabled="item.quantidade === 0" @click="addItem">
            Add Carrinho
          </button>
        </p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    props: ['item','displayList'],
    methods: {
        ...mapActions(['atualizarCarrinho']),
        addItem() {
            const pedido = {
                item: Object.assign({}, this.item),
                quantidade: 1,
                isAdd: true 
            };
            this.atualizarCarrinho(pedido)
        }
    },
	filters: {
		curtaDescricao(valor) {
			if (valor && valor.length > 100) {
				return valor.substring(0, 100) + '...'
			} else {
				return valor
			}
		}
	}
}
</script>

<style lang="scss" scoped>
div.card {
  height: 100%;
}

.card-text {
  font-size: 0.875rem;
}

.remain {
  color: #d17581;
}

.grow {
  transition: all .2s ease-in-out;
}

.grow:hover {
  transform: scale(1.1);
}

.list-group-item {
  float: none;
  width: 100%;
  background-color: #fff;
  margin-bottom: 30px;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
  padding: 0 1rem;
  border: 0;
  .thumbnail {
    display: inline-block;
    width: 100%;
  }
  .img-event {
    width: 20%;
    float: left;
    padding: 0 !important;
    margin: 0;
    height: auto;
  }

  .thumbnail-image {
    position: static;
  }

  .card-body {
    float: left;
    width: 80%;
    margin: 0;
  }

  @media (max-width: 767.98px) {
    .img-event {
      width: 30%;
      float: left;
      padding: 0 !important;
      margin: 0;
    }

    .card-body {
      float: left;
      width: 70%;
      margin: 0;
    }
  }
}
.item.list-group-item:before, .item.list-group-item:after
{
    display: table;
    content: " ";
}
.item.list-group-item:after {
  clear: both;
}
</style>