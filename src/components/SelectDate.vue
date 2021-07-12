<template>
  <div class="select">
    <select v-model="current" @change="$emit('pickDate', current)">
      <option disabled>Choose draw date</option>
      <option v-for="date in dates" :key="date" :value="date">{{ date }}</option>
    </select>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class SelectDate extends Vue {
  @Prop({ required: true }) readonly dates!: string[]
  @Prop({ required: true }) readonly value!: string

  current = this.value
}
</script>

<style lang="sass">
@import '@/assets/sass/components/select_date'
</style>