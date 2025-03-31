<template>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
   <div class="star"></div>
</template>

<style lang="scss">
  @use "sass:map";
  @use "sass:math";
  .star {
    position: relative;
    background-color: white;
  }

  @for $i from 1 through 200 {
    .star:nth-of-type(#{$i}) {
      $size: math.random(5);

      position: absolute;
      top: math.random(350) - 1 + vh;
      left: math.random(101) - 1 + vw;
      width: $size + px;
      height: $size + px;
      border-radius: 50%;
      opacity: math.div(math.random(50), 100) + 0.5;

      animation: fade 10s linear infinite;
      animation-delay: math.random(10000) * -1ms;
    }
    @keyframes fade {
      0%,100% { opacity: 0}
      50% {opacity: 1 }
    };

  }



</style>
<script setup lang="ts">
</script>