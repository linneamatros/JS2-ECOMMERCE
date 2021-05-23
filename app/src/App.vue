<template>
  <div>
    <Navbar />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"

export default {
  components: {
    Navbar,
    Footer
  }

}
</script>

<style>

</style>