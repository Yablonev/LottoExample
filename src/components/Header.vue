<template>
  <header class="header">
    <div class="container">
      <div class="logo-block">
        <router-link class="logo-zone" to="/">
          <img class="logo" :src="require('@/assets/images/logo-white.svg')" alt="logo" />
          <h2 class="logo-text">Lucky Lotto</h2>
        </router-link>
        <h3 class="nav-text">{{ label }}</h3>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Header extends Vue {
  get label(): string {
    return this.$route.name || ''
  }
}
</script>

<style lang="sass">
@import '@/assets/sass/components/header'
</style>