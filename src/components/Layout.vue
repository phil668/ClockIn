<script setup lang='ts'>
import FooterBar from './FooterBar.vue'
import { useDarkMode } from '@/hooks/useDarkMode'

const { toggleTheme } = useDarkMode()
</script>

<template>
  <div class="h-full">
    <div class="main-content h-[calc(100vh-66px)] bg-color-body">
      .main
      <div class="box w-300px h-100px bg-red" />
      <div class="i-mdi-alarm text-orange-400" />
      <var-button type="primary" @click="toggleTheme">
        toggle
      </var-button>
    </div>
    <div class="position-fixed bottom-0 left-0 w-100%">
      <FooterBar />
    </div>
  </div>
</template>

<style scoped>

</style>
