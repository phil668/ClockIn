<script setup lang='ts'>
import { ref } from 'vue'

const active = ref<number>(0)
</script>

<template>
  <var-tabs
    v-model:active="active"
    elevation
    item-direction="vertical"
    color="var(--color-primary)"
    active-color="#fff"
    inactive-color="hsla(0, 0%, 100%, .6)"
  >
    <var-tab>
      <div class="i-mdi-alarm text-2xl m-b-4px" />
      <div>打卡</div>
    </var-tab>
    <var-tab>
      <div class="i-mdi-chart-bar text-2xl m-b-4px" />
      <div>统计</div>
    </var-tab>
    <var-tab>
      <div
        class="i-mdi-account-settings-variant
        text-2xl m-b-4px"
      />
      <div>设置</div>
    </var-tab>
  </var-tabs>
</template>

<style scoped>

</style>
