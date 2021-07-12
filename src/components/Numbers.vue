<template>
  <section class="WinningNumbers animate__animated animate__fadeIn">
    <div class="WinningNumbers__content">
      <span class="WinningNumbers__date">
        {{ date }}
      </span>
      <div class="LottoBlock flex justify-between items-center">
        <div class="DrawNumbersCollection">
          <div class="DrawNumbersCollection__container animate__animated animate__bounceInLeft">
            <div class="LottoBall LottoBall--eurojackpot" v-for="number in numbers" :key="number">
              <span class="LottoBall__circle">{{ number }}</span>
            </div>
          </div>
          <div class="DrawNumbersCollection__container animate__animated animate__bounceInLeft">
            <div class="LottoBall LottoBall--eurojackpot" v-for="number in additionalNumbers" :key="number">
              <span class="LottoBall__circle">{{ number }}</span>
            </div>
          </div>
        </div>
        <img class="lotto" :src="require('@/assets/images/lotto.svg')" alt="lotto" />
      </div>
      <div class="WinningNumbers__notice">All statements without guarantee.</div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Numbers extends Vue {
  @Prop({ required: true }) readonly date!: string
  @Prop({ required: true }) readonly numbers!: string[]
  @Prop({ required: true }) readonly additionalNumbers!: string[]
}
</script>

<style lang="sass">
@import '@/assets/sass/components/numbers'
</style>