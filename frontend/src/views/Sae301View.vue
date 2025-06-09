<script setup lang="ts">

</script>

<template>
<div class="margin">
  <h2>What is SAE301?</h2>
  <div class="grid">
    <img style="grid-column: 2; grid-row: 1;" src="../components/images/sae301-scheme.jpg" alt="file_scheme" width="500">
    <p class="marginauto" style="grid-column: 1; grid-row: 1;">
      This project was dedicated to make amplitude modulation on a RZ signal. We studied the whole circuitry, made the
      electronic schemes and calculated every component value to make everything work.
      We used an NE-555 to generate an NRZ signal, then used a programmable circuit to convert it to an RZ signal,
      then used a Wien bridge oscillator to generate a carrier sine that we multiplied to the RZ signal to modulate it.
      After modulation, we made a synchronous demodulation using the generated carrier, a multiplier and a low-pass filter.
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
    <h2>What I learnt</h2>
    <ul>
      <li>How an amplitude modulation works (+ demodulation)</li>
      <li>How to make an oscillator from scratch</li>
      <li>To brainstorm and work as a group</li>
      <li>How a NE-555 works to generate an NRZ signal</li>
    </ul>
  </div>
  <div>
    <h2>My feelings</h2>
    <div>
      This was complicated. We had to do a lot of calculus and brainstorming,
      deduce spectral densities of the various signals,
      without doing any circuitry.
      But still it was fun and interesting to learn.
    </div>
  </div>
</div>


</template>

<style scoped lang="scss">

</style>