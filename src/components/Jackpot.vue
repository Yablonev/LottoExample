<template>
  <section class="Jackpot">
    <img class="animate__animated animate__swing" :src="require('@/assets/images/jackpot.svg')" alt="jackpot" />
    <h2 class="GameAmount money">{{ format(amount) }}</h2>
  </section>
</template>

<script lang="ts">
import { formatMoney } from '@/logic/helper'
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Jackpot extends Vue {
  @Prop({ required: true }) readonly amount!: string
  format = formatMoney
}
</script>

<style lang="sass">
@import '@/assets/sass/components/jackpot'
</style>