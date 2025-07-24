<script setup lang="ts">
import { ref, onMounted, defineProps} from 'vue'
import {type Event} from '@/types'
import EventService from '@/services/EventService'
import FlashMessage from '@/components/FlashMessage.vue'

const event = ref<Event | null>(null)
const id = ref<number>(5928101)
const errorMessage = ref('')
const props= defineProps({
    id: {
        type: String,
        required: true
    }
})
onMounted(() => {
  EventService.getEvent(id.value)
    .then((response) => {
      event.value = response.data
    })
    .catch((error) => {
      console.error('There was an error!', error)
      errorMessage.value = 'Failed to load event'
    })

  })
</script>

<template>
  <FlashMessage v-if="errorMessage" :message="errorMessage" />
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>
