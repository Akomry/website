<script setup lang="ts">

</script>

<template>
  <div class="">
    <div class="center">
      <h1>Who am I ?</h1>
    </div>
    <div class="margin">
      <div class="flex">
        Heya ! Ako here. <img src="../components/icons/wave.webp" alt="wave" class="emote">
      </div>
      <div>
        <p>
          I'm a 19-year-old proud transfem and programming passionate. I develop softwares, scripts and maintain my own
          server infrastructure in my free time.
        </p>
        <p>
          On E since <time datetime="2025-27-05T17:00:00TZD">27th May, 2025</time>
        </p>
        <br>

        <h2 style="text-decoration: underline">Computer stuff</h2>
        <p>
          Passionate about linux, its architecture, how it works, <em>i use arch btw</em>, and plan on someday make a LFS.
          I'm self-hosting game servers, this website and several other services through systemd units and containers.
          Maybe it's time to host a ptero install? Anyways.
          I'm coding in Java, sometimes (rarely) in JS/TS, scripting using bash.
        </p>
        <br>
        <h2 style="text-decoration: underline">Music stuff</h2>
        <p>
          I'm a beginner vocaloid producer, using FL Studio, SynthesizerV and some random knowledge I acquired on the internet.
          Also been self-taught bass and guitar for 3 years now, have random skills on piano when absolutely needed.
          Maybe one day i'll commit on learning drums and saxophone.
          Huge Kasane Teto fan, KAFU enjoyer, Ado follower, maybe I should make a public playlist for you to check :think:
        </p>

        <br>
        <p>Want a linktree ? Have one</p>
        <ul>
          <li><a href="">Backloggd</a></li>
          <li><a href="">Steam</a></li>
          <li><a href="">Discord</a></li>
          <li><a href="">GitHub</a></li>
          <li><a href="">Itch.io</a></li>
          <li><a href="">SoundCloud</a></li>
        </ul>
      </div>
      <div>

      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @use '@/assets/base';
  .emote {
    height: 3rem;
  }

</style>