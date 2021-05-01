<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import router from "@/router";

export default {
  name: 'App',
  router,
  components: {
    Navbar
  },
}
</script>

<style>

</style>
