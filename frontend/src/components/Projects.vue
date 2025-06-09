<script setup lang="ts">
import {RouterLink} from "vue-router";
</script>

<template>
  <h3 class="center">{{ $t('home.projects') }}</h3>
  <div class="center card-container">

    <div>
      <a href="https://github.com/Akomry/makeyourownapp-jam" target="_blank" rel="external nofllow noopener">
        <img class="rounded card img" src="../components/icons/Illustration3.png" alt="makeyourownapp-jam">
      </a>
      <br>
      <span>Make your own app! game jam</span>
    </div>

    <div>
      <RouterLink to="/sae302" class="nav-li">
        <img class="rounded card" src="../components/images/sae302-screen.png" alt="sae302-chat" width="200">
      </RouterLink>
      <br>
      <span>Communication app</span>
    </div>

    <div>
      <a class="card" href="https://github.com/Akomry/website" target="_blank" rel="external nofllow noopener">
        <img class="rounded card" src="../components/images/website.png" alt="website" width="200">
      </a>
      <br>
      <span>Current website</span>
    </div>
    <div>
      <RouterLink to="/sae201" class="nav-li">
        <img class="rounded card" src="../components/images/schema_reseau.png" alt="sae201" width="200">
      </RouterLink>
      <br>
      <span>Network Project</span>
    </div>
    <div>
      <RouterLink to="/sae301" class="nav-li">
        <img class="rounded card" src="../components/images/sae301-scheme.jpg" alt="sae301" width="200">
      </RouterLink>
      <br>
      <span>Electronics</span>
    </div>


  </div>
</template>

<style lang="scss" scoped>
  @use '../assets/base';
  @use 'sass:map';

  a {
    padding: 10px;
  }

  .card-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(10rem, auto));
    gap: 2rem;
  }

  .card {

    border: map.get(map.get(base.$themes, 'dark'), 'background') 1rem;

    &:hover {
      transform: scale(105%);
    }

    &:active {
      transform: scale(95%);
    }
  }

  .rounded {
    border-radius: 15px;
  }

  .img {
    width: 200px;
  }
</style>