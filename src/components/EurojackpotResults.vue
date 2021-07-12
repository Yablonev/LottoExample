<template>
  <div v-if="selectedDate" class="results">
    <h1>Eurojackpot Results</h1>
    <section class="TopRow flex justify-between items-center">
      <SelectDate :dates="dates" v-on:pickDate="pickDate" v-model="selectedDate" />
      <Jackpot :amount="result.gameAmount" />
    </section>
    <Numbers :numbers="result.numbers" :date="result.date" :additionalNumbers="result.additionalNumbers" />
    <Winners :winners="result.odds" />
  </div>
</template>

<script lang="ts">
import graphql from '@/logic/graphql'
import { Component, Vue } from 'vue-property-decorator'
import { JackpotResultType } from '@/logic/types'

import SelectDate from '@/components/SelectDate.vue'
import Jackpot from '@/components/Jackpot.vue'
import Numbers from '@/components/Numbers.vue'
import Winners from '@/components/Winners.vue'

@Component({
  components: {
    SelectDate, Jackpot, Numbers, Winners
  },
})

export default class EurojackpotResults extends Vue {
  results = []

  dates: string[] = []

  selectedDate = ''

  pickDate(date: string): void {
    this.selectedDate = date
  }

  async mounted(): Promise<void> {
    const { result, error } = await graphql()
    if (error) return
    this.results = result.data.draw.draws
    result.data.draw.draws.forEach((draw: JackpotResultType) => {
      this.dates.push(draw.date)
    })

    this.selectedDate = this.dates[0]
  }

  get result(): JackpotResultType {
    return this.results.filter((result: JackpotResultType) => result.date === this.selectedDate)[0]
  }
}
</script>

<style lang="sass">
@import '@/assets/sass/components/eurojackpot_results'
</style>