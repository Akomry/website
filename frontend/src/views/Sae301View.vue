<script setup lang="ts">

</script>

<template>
<div class="margin">
  <h2>{{ $t('sae301.title') }}</h2>
  <div class="grid">
    <img style="grid-column: 2; grid-row: 1;" src="../components/images/sae301-scheme.jpg" alt="file_scheme" width="500">
    <p class="marginauto" style="grid-column: 1; grid-row: 1;">
      {{ $t('sae301.body1') }}
    </p>
  </div>
</div>
<div class="margin grid">
  <!--
  <div>
    <p>

    </p>
    <img src="../components/images/sae204-elec.jpg" alt="elec_circuitry">
  </div>
  <hr>
  -->
  <div>
    <h2>{{ $t('sae301.learntitle') }}</h2>
    <ul>
      <li>{{ $t('sae301.learn1') }}</li>
      <li>{{ $t('sae301.learn2') }}</li>
      <li>{{ $t('sae301.learn3') }}</li>
      <li>{{ $t('sae301.learn4') }}</li>
    </ul>
  </div>
  <div>
    <h2>{{ $t('sae301.feelingstitle') }}</h2>
    <div>
      {{ $t('sae301.feelings') }}
    </div>
  </div>
</div>


</template>

<style scoped lang="scss">

</style>