import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useFlashStore = defineStore('flash', () => {
  const message = ref('')
  const show = ref(false)

  function flash(msg: string, timeout = 3000) {
    message.value = msg
    show.value = true
    setTimeout(() => {
      show.value = false
    }, timeout)
  }

  return { message, show, flash }
})
