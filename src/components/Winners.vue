<template>
  <section class="Table animate__animated animate__fadeIn">
    <table class="OddsTableContainer__table">
      <thead>
        <tr class="OddsTableRow OddsTableRow--head">
          <th>Class</th>
          <th>Correct</th>
          <th>Winners</th>
          <th>Odd</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in winners" :key="row.winningClass" class="OddsTableRow">
          <td>{{ row.winningClass }})</td>
          <td>{{ correctRules[row.winningClass-1] }}</td>
          <td>{{ new Intl.NumberFormat('de-DE').format(row.numberOfWinners) }} X</td>
          <td class="money">{{ format(row.odd) }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script lang="ts">
import { formatMoney } from '@/logic/helper'
import { Component, Vue, Prop } from 'vue-property-decorator'
import { WinnersType } from '@/logic/types'

@Component
export default class Winners extends Vue {
  correctRules = ['5 + 2', '5 + 1', '5 + 0', '4 + 2', '4 + 1', '4 + 0', '3 + 2', '2 + 2', '3 + 1', '3 + 0', '1 + 2', '2 + 1']
  format = formatMoney

  @Prop({ required: true }) readonly winners!: WinnersType[]
}
</script>

<style lang="sass">
@import '@/assets/sass/components/winners'
</style>