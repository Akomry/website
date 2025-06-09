<script setup lang="ts">

import {RouterLink} from "vue-router";
</script>

<template>
  <div class="center">
    <h1>{{ $t('cv.title') }}</h1>
  </div>

  <div class="margin flex space-around">
    <div>
        <h2>{{ $t('cv.coord') }}</h2>
        <p>Emi BOUCLY</p>
        <p>34 rue de Mortillet, 38000 Grenoble</p>
        <p><a href="mailto:emi.boucly38@gmail.com">emi.boucly38@gmail.com</a></p>
        <p><a href="tel:0768280432">07 68 28 04 32</a></p>
        <p>{{ $t('cv.age') }}</p>
    </div>

    <div>
      <h2>{{ $t('cv.formation') }}</h2>
      <p>2024/2025 - {{ $t('cv.rt') }}</p>
      <em style="font-size: smaller">{{ $t('cv.iut') }}</em>

      <br><br>
      <p>2022/2023 - {{ $t('cv.bac') }}</p>
      <em style="font-size: smaller">{{ $t('cv.lycee') }} - Pont de Beauvoisin</em> <br>
      <em style="font-size: smaller">{{ $t('cv.spebac') }}</em>


    </div>

    <div>
      <h2>{{ $t('cv.lang') }}</h2>
      <p>{{ $t('cv.francais') }}</p>
      <p>{{ $t('cv.anglais') }}</p>
      <p>{{ $t('cv.allemand') }}</p>
    </div>

    <div>
      <h2>{{ $t('cv.comp') }}</h2>
      <p>{{ $t('cv.prog') }}</p>
      <p>{{ $t('cv.devnet') }}</p>
      <p>{{ $t('cv.cont') }}</p>
      <p>{{ $t('cv.ad') }}</p>
      <p>{{ $t('cv.db') }}</p>
      <p>{{ $t('cv.automate') }}</p>
    </div>

    <div>
      <h2>Experience</h2>
      <h3><RouterLink to="/apprenticeship">Impactiv'</RouterLink></h3>
      <em style="font-size: smaller">2024 - Now</em>
      <p>IT and networking technician in a co-op program.</p>
    </div>

    <div>
      <h2></h2>
    </div>
  </div>
</template>

<style scoped lang="scss">
  h2 {
    text-align: center;
  }
</style>