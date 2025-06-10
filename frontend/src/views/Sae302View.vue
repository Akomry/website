<script setup lang="ts">

</script>

<template>
<div class="margin">

  <h2>{{$t('sae302.title')}}</h2>
  <div class="grid">
    <p class="marginauto">
      {{$t('sae302.body1')}}
    </p>
    <img class="marginauto" src="../components/images/sae302-screen.png" alt="app-screen" width="500">
  </div>
  <br>

  <div class="grid">
    <img class="marginauto" src="../components/images/sae302-intellij.png" alt="intellij" width="700">
    <p class="marginauto">{{$t('sae302.body21')}}
      <a href="https://github.com/Akomry/sae302_applicom">GitHub</a>{{$t('sae302.body22')}}</p>
  </div>
  <br>

  <div class="grid">
    <div>
      <h2>{{$t('sae302.learntitle')}}</h2>
      <ul>
        <li>{{$t('sae302.learn1')}}</li>
        <li>{{$t('sae302.learn2')}}</li>
        <li>{{$t('sae302.learn3')}}</li>
      </ul>
    </div>
    <div>
      <h2>{{$t('sae302.feelingstitle')}}</h2>
      <p>
        {{$t('sae302.feelings')}}
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