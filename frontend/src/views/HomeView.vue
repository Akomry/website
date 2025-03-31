<script setup lang="ts">
import buttons from "@/components/88x31.vue";
</script>

<template>
  <div class="centerdown">
    <div class="center">Welcome on my website !</div>
    <hr class="margin">
    <div class="cell"><buttons /></div>
  </div>
</template>

<style lang="scss" scoped>
  .center {
    align-items: center;
    text-align: center;
  }

  .margin {
    margin-left: 10%;
    margin-right: 10%;

  }

  .cell {
    @extend .margin;
    border-radius: 15px;
    padding: 10px;
    background: rgba(0,0,0,0.2)
  }
</style>
