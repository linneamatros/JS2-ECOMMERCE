<template>
<div class="container mt-4">
  <div class="home">

    <!-- Carousel wrapper -->
<div
  id="carouselBasicExample"
  class="carousel slide carousel-fade"
  data-mdb-ride="carousel"
>
<h3>Nyinkomna produkter</h3>
  <!-- Indicators -->
  <div class="carousel-indicators">
    <button
      type="button"
      data-mdb-target="#carouselBasicExample"
      data-mdb-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-mdb-target="#carouselBasicExample"
      data-mdb-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-mdb-target="#carouselBasicExample"
      data-mdb-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>

  <!-- Inner -->
  <div class="carousel-inner">
    <!-- Single item -->
    <div class="carousel-item active">
      <img
        src="../../public/hawks.png"
        class="d-block w-100"
        alt="..."
      />
      <div class="carousel-caption d-none d-md-block">
        <h5>Hawkshead</h5>
        <p>Maltig smak med tydlig beska, inslag av kryddor och torkad frukst</p>
      </div>
    </div>

    <!-- Single item -->
    <div class="carousel-item">
      <img
        src="../../public/hoegaarden.png"
        class="d-block w-100"
        alt="..."
      />
      <div class="carousel-caption d-none d-md-block">
        <h5>Hoegaarden</h5>
        <p>Fruktig smak med inslag av vetebröd, citron och jasminris.</p>
      </div>
    </div>

    <!-- Single item -->
    <div class="carousel-item">
      <img
        src="../../public/corona.png"
        class="d-block w-100"
        alt="..."
      />
      <div class="carousel-caption d-none d-md-block">
        <h5>Corona Extra</h5>
        <p>Brödig smak med inslag av citrus och örter.</p>
      </div>
    </div>
  </div>
  <!-- Inner -->

  <!-- Controls -->
  <button
    class="carousel-control-prev"
    type="button"
    data-mdb-target="#carouselBasicExample"
    data-mdb-slide="prev"
  >
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">'Föregående'</span>
  </button>
  <button
    class="carousel-control-next"
    type="button"
    data-mdb-target="#carouselBasicExample"
    data-mdb-slide="next"
  >
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Nästa</span>
  </button>
</div>

<div class="border-top mt-5"></div>

<div class="undermenu mt-4 text text-center">
  <h3>Upptäck fler ölsorter</h3>
    <div class="menubar mt-3 d-flex flex-wrap justify-content-center mb-5">
      <router-link to="/products" exact class="btn btn-white col-3 m-2">Suröl</router-link>
      <router-link to="/products" exact class="btn btn-white col-3 m-2">Ljus lager</router-link>
      <router-link to="/products" exact class="btn btn-white col-3 m-2">Veteöl</router-link>
      <router-link to="/products" exact class="btn btn-white col-3 m-2">Suröl</router-link>
      <router-link to="/products" exact class="btn btn-white col-3 m-2">Ljus lager</router-link>
      <router-link to="/products" exact class="btn btn-white col-3 m-2">Veteöl</router-link>
    </div>
</div>
<!-- Carousel wrapper -->

</div>

</div>

</template>

<script>

export default {
  name: 'Home',
  components: {
   

  }
}
</script>


<style scoped>

.carousel {
  margin: 0 auto;
  padding-top: 2rem;
}



h3 { 
  font-family: monospace;

}

</style>