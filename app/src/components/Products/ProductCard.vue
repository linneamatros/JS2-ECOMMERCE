<template>
  <div class="col mb-5">
    <div class="card h-100 p-1 m-4">
      <div class="card-body d-flex flex-wrap justify-content-center align-center mb-2">
        <img :src="product.image" class="card-img-top col-12 mb-3" alt="">
        <h5 class="card-title col-12">{{ product.name }}</h5>
        <p class="card-text col-12">{{ product.desc }} </p>
        <p class="card-price col-12">{{ product.price }}:- </p>
        
        <div>
          <router-link :to="{ name: 'ProductDetails', params: { id: product._id }}" type="button" class="btn btn-white ">Visa Produkt</router-link>
        </div>       
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'ProductCard',
  props: ['product']
}
</script>

<style scoped>

.card img {
  height: 300px;
  width: auto;
  object-fit: contain;
}

.card-price {
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.quantity {
  background-color: #2fbdec;
  color: #fff;
  border: none;
  text-align: center;

}
</style>