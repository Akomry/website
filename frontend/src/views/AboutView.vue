<script setup lang="ts">

</script>

<template>
  <div class="">
    <div class="center">
      <h1>{{ $t('about.title') }}</h1>
    </div>
    <div class="margin">
      <div class="flex">
        {{ $t('about.hey')}} <img src="../components/icons/wave.webp" alt="wave" class="emote">
      </div>
      <div>
        <p>
          {{ $t('about.me')}}
        </p>
        <p>
          {{$t('about.estrogen')}}
        </p>
        <br>

        <h2 style="text-decoration: underline">{{ $t('about.computerstuff') }}</h2>
        <p>
          {{$t('about.comp1')}}<em>{{$t('about.arch')}}</em>{{$t('about.comp2')}}
        </p>
        <br>
        <h2 style="text-decoration: underline">{{$t('about.musicstuff')}}</h2>
        <p>
          {{$t('about.music')}}
        </p>

        <br>
        <h2 style="text-decoration: underline">{{$t('about.animestuff')}}</h2>
        <p>
          {{$t('about.anime')}}
        </p>

        <br>
        <h2 style="text-decoration: underline">{{$t('about.videogamestuff')}}</h2>
        <p>
          {{$t('about.videogames')}}
        </p>

        <br>
        <h2 style="text-decoration: underline">{{$t('about.artstuff')}}</h2>
        <p>
          {{$t('about.art')}}

        </p>

        <br>
        <h2 style="text-decoration: underline">{{$t('about.telecomstuff')}}</h2>
        <p>
          {{$t('about.telecom')}}
        </p>


        <br>
        <p>{{$t('about.linktree')}}</p>
        <ul>
          <li><a href="https://backloggd.com/u/Akorona/">Backloggd</a></li>
          <li><a href="https://steamcommunity.com/profiles/76561198347930009/">Steam</a></li>
          <li><a href="https://discord.com/users/281342667781308417/">Discord</a></li>
          <li><a href="https://github.com/Akomry/">GitHub</a></li>
          <li><a href="https://akorona.itch.io/">Itch.io</a></li>
          <li><a href="https://soundcloud.com/akorona/">SoundCloud</a></li>
          <li><a href="https://anilist.co/user/Akorona/">AniList</a></li>
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