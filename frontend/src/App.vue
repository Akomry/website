<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import StarrySky from "@/components/StarrySky.vue";
import Projects from "@/components/Projects.vue";
</script>

<template>
  <div class="dark">
    <header>

      <div class="wrapper">
        <nav>
          <RouterLink to="/" class="nav-li">Home</RouterLink>
          <RouterLink to="/about" class="nav-li">About me</RouterLink>
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

  html {
    background: #000000;
  }
  
  body {
    height: 100%;
    color: map.get(map.get(base.$themes, "dark"), "text");
    background: linear-gradient(
            to top,
            #000000 0%,
            #000000 50%,
            map.get(map.get(base.$themes, "dark"), "background") 100%,
    ) no-repeat;
    font-family: Consolas, sans-serif;
  }

  .nav-li {
    padding: 10px;
  }

  a { color: inherit; }



</style>