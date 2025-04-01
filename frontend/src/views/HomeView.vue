<script setup lang="ts">
import buttons from "@/components/88x31.vue";
import Projects from "@/components/Projects.vue";
import StarrySky from "@/components/StarrySky.vue";
function scrollToProjects() {
  const projectsRect = document.querySelector('#section-projects > .section-title')!.getBoundingClientRect();
  window.scrollTo({ behavior: 'smooth', top: projectsRect.top - projectsRect.height });
}
</script>

<template>
  <div class="centerdown">


    <!-- Welcome text -->
    <br style="margin-top: 8%">
    <pre class="center font-bigger">
┌─────────────────────────────────────────────┐
│                  _  _              __       │
│  ___  _ __ ___  (_)| | __ ___     / _| _ __ │
│ / _ \| '_ ` _ \ | || |/ // _ \   | |_ | '__|│
│|  __/| | | | | || ||   <| (_) |_ |  _|| |   │
│ \___||_| |_| |_||_||_|\_\\___/(_)|_|  |_|   │
└─────────────────────────────────────────────┘</pre>
    <div class="center"><h1>Welcome to my website !</h1></div>
      <hr class="margin" style="margin-top: 24%">

    <!-- 88x31 buttons -->
    <div class="cell" id="projects"><projects /></div>
    <br>
    <div class="cell"><buttons /></div>
  </div>
</template>

<style lang="scss" scoped>
</style>
