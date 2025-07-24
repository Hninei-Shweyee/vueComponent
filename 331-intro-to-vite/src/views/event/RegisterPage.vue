<template>
  <div>
    <h1>Register</h1>
    <button @click="register">Submit</button>

    <FlashMessage v-if="showFlash" message="Registration successful!" :duration="3000" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import FlashMessage from '../../components/FlashMessage.vue'

const showFlash = ref(false)

function register() {
  // Simulate registration process
  setTimeout(() => {
    showFlash.value = true
    setTimeout(() => (showFlash.value = false), 3000) // hide after 3 sec
  }, 1000)
}
</script>
