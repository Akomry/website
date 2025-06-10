<script setup lang="ts">

</script>

<template>
<div class="margin">
  <h2>{{ $t('alternance.title') }}</h2>
  <p>
    {{ $t('alternance.body1') }}
  </p>
  <br>
  <h2>{{ $t('alternance.whois') }} <a href="https://impactiv.fr/">Impactiv'</a> ?</h2>
  <div class="grid">
    <p class="marginauto">
      {{ $t('alternance.body2') }}
    </p>
    <img class="marginauto" src="../components/images/impactiv.svg" alt="impactiv-logo" >
  </div>
  <br>
  <h2>{{ $t('alternance.what') }}</h2>
  <div>
    <div class="grid">
      <p>
        {{ $t('alternance.what1') }}
      </p>
      <img class="marginauto" src="../components/images/bt4.png" alt="bt4" >
    </div>
    <p>
      {{ $t('alternance.what2') }}
    </p>
    <p>
      {{ $t('alternance.what3') }}
    </p>
    <p>
      {{ $t('alternance.what4') }}
    </p>
  </div>
  <br>
  <div>
    <h2>{{ $t('alternance.learn') }}</h2>
    <p>
      {{ $t('alternance.learn1') }}
    </p>
    <p>
      {{ $t('alternance.learn2') }}
    </p>
    <div class="grid">
      <img class="marginauto" src="../components/images/debug.png" alt="debug-screen" >
      <p class="marginauto">
        {{ $t('alternance.learn3') }}
      </p>
    </div>
    <p>
      {{ $t('alternance.learn4') }}
    </p>
    <div class="grid">
      <p>
        {{ $t('alternance.learn5') }}
      </p>
      <img class="marginauto" src="../components/images/mender.png" alt="mender-logo">
    </div>
    <p>
      {{ $t('alternance.learn6') }}
    </p>
    <p>
      {{ $t('alternance.learn7') }}
    </p>
  </div>

  <br>
  <div>
    <h2>{{ $t('alternance.conclusion') }}</h2>
    <p>
      {{ $t('alternance.conclusion1') }}
    </p>
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
      max-width: 20dvw;
    }
  }
</style>