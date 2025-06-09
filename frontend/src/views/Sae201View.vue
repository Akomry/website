<script setup lang="ts">

</script>

<template>
<div class="margin">
  <div>
    <h2>What is SAE201?</h2>
    <div class="grid">
      <p class="marginauto">
        During this project, I proceeded to the installation simulation of a microenterprise's networking system.
        For this I used tools like OpenStack to create virtual machines and networks. Then, I installed various services
        on CentOS Stream 8 machines. Those services includes Apache, DNSMasq, Grafana & Prometheus, and Nextcloud.
      </p>
      <img class="marginauto" src="../components/images/openstack.png" alt="openstack logo" width="300">
    </div>
  </div>
  <div class="grid">
    <img class="marginauto" src="../components/images/schema_reseau.png" alt="network_scheme" width="500">
    <p class="marginauto">
      The simulated network was independant for each group. To access to our machines, we had to use virtual machines
      running Windows which had elastic IPs connected to our university's VPN.
    </p>
    <br>
  </div>
  <div class="grid">
    <div>
      <h2>What I learnt</h2>
      <ul>
        <li>Install Linux services</li>
        <li>Create bash scripts and manage a Linux system</li>
        <li>Debug using tools such as Wireshark or TCPDump</li>
      </ul>
    </div>
    <div>
      <h2>My feelings</h2>
      <p>
        It's the project I loved the most this year. Having an appetite for Linux systems and their manipulation, I enjoyed
        working on this project
      </p>
    </div>
  </div>
</div>

</template>

<style scoped lang="scss">

</style>