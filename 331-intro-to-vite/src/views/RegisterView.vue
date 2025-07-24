<script setup lang="ts">
import { ref } from 'vue'
import { useFlashStore } from '@/stores/flash'

const username = ref('')
const flash = useFlashStore()

function submit() {
  flash.flash('Registration successful!')
  username.value = ''
}
</script>

<template>
  <div>
    <h1>Register</h1>
    <form @submit.prevent="submit">
      <input v-model="username" placeholder="Username" />
      <button type="submit">Register</button>
    </form>
  </div>
</template>
