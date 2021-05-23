<template>
  <div>

    <ShoppingCartProduct v-for="item in shoppingCart" :key="item.product._id" :item="item" />
    
    <div v-if="shoppingCart.length < 1">
      <div class="p-2 d-flex justify-content-center align-items-center">
        Din kundvagn är tom.
      </div>
      <div class="dropdown-divider"></div>
    </div>


    <div class="p-3 d-flex justify-content-between align-items-center">
      <div>
        <div class="total-price">
          Totalt: <span>{{ shoppingCartTotal }} SEK</span>
        </div>
        <small class="text-muted">inkl. moms</small>
      </div>
      <button class="btn btn-info">Gå till kassan</button>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ShoppingCartProduct from './ShoppingCartProduct'
export default {
  name: 'ShoppingCart',
  components: {
    ShoppingCartProduct
  },
  computed: {
    ...mapGetters(['shoppingCart', 'shoppingCartTotal'])
  }
}
</script>

<style>
</style>