<template>
  <div class="container mt-5">
    <ProductCardDeck />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import ProductCardDeck from '../components/Products/ProductCardDeck'
export default {
  components: {
    ProductCardDeck
  },
  methods: {
    ...mapActions(['getProducts'])
  },
  created() {
    this.getProducts()

  }
}
</script>

<style>

</style>