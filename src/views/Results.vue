<template>
  <div class="home">
    <EurojackpotResults />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import EurojackpotResults from '@/components/EurojackpotResults.vue'

@Component({
  components: {
    EurojackpotResults,
  },
})
export default class Home extends Vue {}
</script>