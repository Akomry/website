<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import StarrySky from "@/components/StarrySky.vue";
</script>

<template>
  <div class="dark">
    <header>

      <div class="wrapper">
        <nav>
          <RouterLink to="/" class="nav-li">Home</RouterLink>
          <RouterLink to="/about" class="nav-li">About</RouterLink>
        </nav>
      </div>
    </header>
    <RouterView />
    <starry-sky />

    </div>
</template>

<style lang="scss">
  @use "assets/base";
  @use "sass:map";
  @use "sass:math";


  body {
    height: 3000px;
    background: #000000;
    background: linear-gradient(
    to top,
            #000000 0%,
            #000000 50%,
            map.get(map.get(base.$themes, "dark"), "background") 100%,
    );
    color: map.get(map.get(base.$themes, "dark"), "text");
    font-family: Consolas, sans-serif;
  }

  .nav-li {
    padding: 10px;
  }

  a { color: inherit; }



</style>