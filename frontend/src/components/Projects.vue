<script setup lang="ts">
</script>

<template>
  <h3 class="center">Some cool projects I worked on</h3>
  <div class="center card-container">

    <div>
      <a href="https://github.com/Akomry/makeyourownapp-jam" target="_blank" rel="external nofllow noopener">
        <img class="rounded card img" src="../components/icons/Illustration3.png" alt="makeyourownapp-jam">
      </a>
      <br>
      <span>Make your own app! game jam</span>
    </div>

    <div>
      <a class="card" href="https://github.com/Akomry/sae302-chat">
        <img class="rounded card" src="" alt="sae302-chat" width="300">
      </a>
      <br>
      <span>Communication app</span>
    </div>

    <div>
      <a class="card" href="https://github.com/Akomry/website">
        <img class="rounded card" src="" alt="website" width="300">
      </a>
      <br>
      <span>Current website</span>
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