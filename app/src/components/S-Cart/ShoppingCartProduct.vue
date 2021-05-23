<template>
  <div class="cart-item">
    <div class="p-2 d-flex justify-content-between align-items-center">

      <div class="d-flex align-items-center p-3">
        <img :src="item.product.image" alt="" class=" image-width">
          <div class="d-flex flex-wrap align-items-center">

            <div class="col-12 ms-4 text-info">
              {{ item.product.name }}
            </div>
            <div class="col-12 ms-4">
              {{ item.quantity }} x {{ item.product.price }}
            </div>

          </div>
      </div>

      <div>
        <div class="btn-group btn-group-sm me-2" role="group">
          <button class="btn btn-white" @click.stop="removeOneProductFromCart({ product: item.product, quantity })">-</button>
          <button class="btn btn-white" @click.stop="addProductToCart({ product: item.product, quantity })">+</button>
        </div>
      </div>
    </div>

    <div class="dropdown-divider"></div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "CartItem",
  props: ["item"],
  data() {
    return {
      quantity: 1,
    }
  },
  methods: {
    ...mapActions([
      "addProductToCart",
      "removeOneProductFromCart",
    ])
  }
}
</script>

<style >
.image-width {
  width: 70px;
}

.text-info {
  font-family: monospace;
}

</style>