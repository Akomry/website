<script setup lang="ts">
import buttons from "@/components/88x31.vue";
import Projects from "@/components/Projects.vue";
import StarrySky from "@/components/StarrySky.vue";
function scrollToProjects() {
  const projectsRect = document.querySelector('#projects')!.getBoundingClientRect();
  window.scrollTo({ behavior: 'smooth', top: projectsRect.top });
}
import { Icon } from '@iconify/vue'
</script>

<template>
  <div class="centerdown">

    <div style="min-height: 100vh;">
      <!-- Welcome text -->
      <br style="margin-top: 8%">
      <pre class="center screen-width">
┌─────────────────────────────────────────────┐
│                  _  _              __       │
│  ___  _ __ ___  (_)| | __ ___     / _| _ __ │
│ / _ \| '_ ` _ \ | || |/ // _ \   | |_ | '__|│
│|  __/| | | | | || ||   <| (_) |_ |  _|| |   │
│ \___||_| |_| |_||_||_|\_\\___/(_)|_|  |_|   │
└─────────────────────────────────────────────┘</pre>
      <div class="center">
        <h1>{{ $t('home.welcome') }}</h1>
        <button class="scroll-indicator" style="margin-top: 12%" @click="scrollToProjects()">
          <Icon icon="mingcute:down-line" style="width: 3rem; height: 3rem;" width="3rem" />
        </button>
      </div>
    </div>
    <!-- 88x31 buttons -->
    <br>
    <div class="cell" id="projects"><projects /></div>
    <br>
    <div class="cell"><buttons /></div>
  </div>
</template>

<style lang="scss" scoped>

  .scroll-indicator {
    background: transparent;
    border: transparent;
    bottom: 2rem;

    &:hover {
      transform: scale(105%);
    }
    &:active {
      transform: scale(97.5%);
    }
  }

  @media screen and (min-width: 1600px) {
    body {
      font-size: 30px;
    }
  }

</style>