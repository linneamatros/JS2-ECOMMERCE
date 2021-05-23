<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">

      <router-link class="navbar-brand" to="/">
          <img src="logga.png" alt="logotype">
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">

        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Hem</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/products">Produkter</router-link>
          </li>
       
        </ul>

        <ul class="navbar-nav ms-auto">

            <li class="nav-item dropdown" v-if="loggedIn">
              <a
                class="nav-link dropdown"
                href="#"
                id="navbarDropdown"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
              </a>
              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                <li class="nav-item">
                  <router-link class="nav-link" aria-current="page" to="/user">Användare</router-link>
                </li>
              </ul>
            </li>
            <li v-if="!loggedIn">
              <router-link class="nav-link" to="/Login"><i class="fas fa-user"></i></router-link>
            </li>

                 <li class="nav-item dropdown">
            <a
              class="nav-link"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="fas fa-shopping-cart"></i>
              <span v-show="cartItemCount" class="badge rounded-pill badge-notification bg-danger">{{ cartItemCount }}</span>
            </a>
            <ul class="dropdown-menu dropdown-menu-end shopping-cart" aria-labelledby="navbarDropdown">
                <ShoppingCart />
              </ul>
            </li>

            
          </ul>
        </div>
      </div>
    </nav>
</template>

<script>
import { mapGetters } from 'vuex'
import ShoppingCart from '../S-Cart/ShoppingCart'
export default {
  name: 'Navbar',
  components: {
    ShoppingCart
  },
  computed: {
    ...mapGetters(['cartItemCount', 'loggedIn'])
  }
  //  data() {
  //    return {
  //      loggedIn: false
  //    }
  //  }
}
</script>

<style scoped>


.shopping-cart {
  min-width: 450px;
}

</style>