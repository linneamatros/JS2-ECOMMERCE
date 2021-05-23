<template>
  <div>
    <h1>404 not found</h1>
    <p>Please enter a valid address</p>
  </div>
</template>

<script>
export default {
  name: '404',
  created() {
    setTimeout(() =>{
      this.$router.push({ path: '/' })
    }, 3000)
  }

}
</script>

<style>

</style>