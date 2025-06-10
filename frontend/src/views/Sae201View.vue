<script setup lang="ts">

</script>

<template>
<div class="margin">
  <div>
    <h2>{{ $t('sae201.title') }}</h2>
    <div class="grid">
      <p class="marginauto">
        {{ $t('sae201.body1') }}
      </p>
      <img class="marginauto" src="../components/images/openstack.png" alt="openstack logo" width="300">
    </div>
  </div>
  <br>
  <div class="grid">
    <img class="marginauto" src="../components/images/schema_reseau.png" alt="network_scheme" width="500">
    <p class="marginauto">
      {{ $t('sae201.body2') }}
    </p>
    <br>
  </div>
  <div class="grid">
    <div>
      <h2>{{ $t('sae201.learntitle') }}</h2>
      <ul>
        <li>{{ $t('sae201.learn1') }}</li>
        <li>{{ $t('sae201.learn2') }}</li>
        <li>{{ $t('sae201.learn3') }}</li>
        <li>{{ $t('sae201.learn4') }}</li>
      </ul>
    </div>
    <div>
      <h2>{{ $t('sae201.feelingstitle') }}</h2>
      <p>
        {{ $t('sae201.feelings') }}
      </p>
    </div>
  </div>
</div>

</template>

<style scoped lang="scss">
  p {
    text-align: justify;
  }
  img {
    width: 40dvw;
  }
  @media screen and (min-width: 900px) {
    img {
      max-width: 30dvw;
    }
  }
</style>