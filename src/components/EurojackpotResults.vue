<template>
  <div v-if="result.date" class="results">
    <h1>Eurojackpot Results</h1>
    <section class="TopRow flex justify-between items-center">
      <div class="select">
        <select v-model="selectedDate">
          <option disabled>Choose draw date</option>
          <option v-for="date in dates" :key="date" :value="date">{{ date }}</option>
        </select>
      </div>
      <section class="Jackpot">
        <img class="animate__animated animate__swing" :src="require('@/assets/images/jackpot.svg')" alt="jackpot" />
        <h2 class="GameAmount money">{{ formatMoney(result.gameAmount) }}</h2>
      </section>
    </section>
    <section class="WinningNumbers animate__animated animate__fadeIn">
      <div class="WinningNumbers__content">
        <span class="WinningNumbers__date">
          {{ result.date }}
        </span>
        <div class="LottoBlock flex justify-between items-center">
          <div class="DrawNumbersCollection">
            <div class="DrawNumbersCollection__container animate__animated animate__bounceInLeft">
              <div class="LottoBall LottoBall--eurojackpot" v-for="number in result.numbers" :key="number">
                <span class="LottoBall__circle">{{ number }}</span>
              </div>
            </div>
            <div class="DrawNumbersCollection__container animate__animated animate__bounceInLeft">
              <div class="LottoBall LottoBall--eurojackpot" v-for="number in result.additionalNumbers" :key="number">
                <span class="LottoBall__circle">{{ number }}</span>
              </div>
            </div>
          </div>
          <img class="lotto" :src="require('@/assets/images/lotto.svg')" alt="lotto" />
        </div>
        <div class="WinningNumbers__notice">All statements without guarantee.</div>
      </div>
    </section>
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
          <tr v-for="row in result.odds" :key="row.winningClass" class="OddsTableRow">
            <td>{{ row.winningClass }})</td>
            <td>{{ correctRules[row.winningClass-1] }}</td>
            <td>{{ new Intl.NumberFormat('de-DE').format(row.numberOfWinners) }} X</td>
            <td class="money">{{ formatMoney(row.odd) }}</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script lang="ts">
import graphql from '@/logic/graphql'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class EurojackpotResults extends Vue {
  results = []

  dates: Array<any> = []

  selectedDate = ''

  correctRules = ['5 + 2', '5 + 1', '5 + 0', '4 + 2', '4 + 1', '4 + 0', '3 + 2', '2 + 2', '3 + 1', '3 + 0', '1 + 2', '2 + 1']

  async mounted(): Promise<void> {
    const { result, error } = await graphql()
    if (error) return
    this.results = result.data.draw.draws
    result.data.draw.draws.forEach((draw: any) => {
      this.dates.push(draw.date)
    })

    this.selectedDate = this.dates[0]
  }

  get result(): any {
    return this.results.length > 0 ? this.results.filter((result: any) => result.date === this.selectedDate)[0] : {}
  }

  formatMoney(str: string): string {
    if (!str) return ''
    let newStr = ''
    for (let i = 0; i < str.length - 2; i++) {
      const char = str[str.length - 3 - i]
      newStr = char + (i && i % 3 === 0 ? '.' : '') + newStr
    }
    return newStr + ',' + str.slice(-2) + ' €'
  }
}
</script>

<style lang="sass">
@import '@/assets/sass/components/eurojackpot_results'
</style>