<template>
  <div class="container welcome">
    <div class="flex">
      <img class="logo" :src="require('@/assets/images/lucky.svg')" alt="" />
      <h1>Welcome to Lucky Lotto!</h1>
    </div>
    <p>Just press button below to show results for the last Eurojackpot lotto game</p>
    <router-link class="results__button" to="/results">Eurojackpot Results</router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Welcome extends Vue {}
</script>

<style lang="sass">
@import '@/assets/sass/components/welcome'
</style>