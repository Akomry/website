<template>
  <nav class="font-bigger">
    <RouterLink to="/about" class="nav-li">About me</RouterLink>
    <RouterLink to="/" class="nav-li">Home</RouterLink>
  </nav>
</template>

<script setup lang="ts">
import {RouterLink} from "vue-router";
</script>

<style lang="scss">

  nav {
    padding: 15pt;
    display: flex;
    flex-direction: row-reverse;
  }

</style>