<template>
  <div class="container" >
  <div class="row text-center" >
    <!--<grid-loader></grid-loader>-->
  </div>
  <div  class="row action-panel">
    <div class="col-12">
      <div class="btn-group btn-group-sm pull-right">
				<button id="list" class="btn btn-outline-dark" @click.prevent="changeDisplay(true)">
          <i class="fa fa-list" aria-hidden="true"></i> List
				</button>
				<button id="grid" class="btn btn-outline-dark" @click.prevent="changeDisplay(false)">
          <i class="fa fa-th" aria-hidden="true"></i> Grid
				</button>
      </div>
    </div>
  </div>

  <div class="row">
    <!--<app-product-item></app-product-item>-->
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>