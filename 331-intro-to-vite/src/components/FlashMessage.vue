
<script setup lang="ts">
import { useFlashStore } from '@/stores/flash'
const flash = useFlashStore()
</script>

<template>
  <div v-if="flash.show" class="flash-message">{{ flash.message }}</div>
</template>

<style scoped>
.flash-message {
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: #42b983;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
}
</style>