<script setup>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="flex flex-col">
    <NavBar></NavBar>
    <main>
      <router-view></router-view>
    </main>
    <Footer></Footer>
  </div>
</template>

<style scoped></style>
