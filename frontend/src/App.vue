<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import StarrySky from "@/components/StarrySky.vue";
import HeaderNav from "@/components/HeaderNav.vue"
</script>

<template>
  <div class="background">
    <div class="dark">

      <header-nav />
      <RouterView />

      <starry-sky />

    </div>
  </div>
</template>

<style lang="scss">
  @use "assets/base";
  @use "sass:map";
  @use "sass:math";

  :root * {
    color: #e0e0e0;
  }

  .background {
    height: 100%;
    width: 100%;
    position:absolute;
    top:0;
    left:0;
    background: linear-gradient(
            to top,
            #000000 -10%,
            #000000 50%,
            map.get(map.get(base.$themes, "dark"), "background") 100%,
    ) no-repeat;
    resize: both;
    font-family: "YaHei Consolas Hybrid", Consolas, Inconsolata, sans-serif;
  }

  body {
    background: black
  }

  .nav-li {
    padding: 10px;
  }

  a { color: inherit; }



</style>