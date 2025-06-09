<template>
  <nav class="font-bigger">
    <RouterLink to="/alternance" class="nav-li">{{ $t('nav.alt') }}</RouterLink>
    <RouterLink to="/cv" class="nav-li">{{ $t('nav.cv') }}</RouterLink>
    <RouterLink to="/about" class="nav-li">{{ $t('nav.about') }}</RouterLink>
    <RouterLink to="/" class="nav-li">{{ $t('nav.home') }}</RouterLink>
    <div class="locale-changer">
      <select v-model="$i18n.locale">
        <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}</option>
      </select>
    </div>
  </nav>
</template>

<script setup lang="ts">
import {RouterLink} from "vue-router";
</script>

<style lang="scss">

  nav {
    padding: 15pt;
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap;
  }

</style>