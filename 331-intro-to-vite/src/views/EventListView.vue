<script setup lang="ts">
import { ref, computed, watchEffect,onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import EventCard from '@/components/EventCard.vue'
import { type Event } from '@/types'
import EventService from '@/services/EventService'

const route = useRoute()
const router = useRouter()
 
// Page and Page Size from query
const page = computed(() => parseInt(route.query.page as string) || 1)
const pageSize = 4
 
// Event state
const events = ref<Event[] | null>(null)
const totalEvents = ref(0)
 
// Calculate total pages
const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalEvents.value / pageSize)
  return page.value < totalPages
})
 
// Fetch events on page or size change
onMounted(() => {
  watchEffect(() => {
    EventService.getEvents(pageSize, page.value)
      .then((response) => {
        events.value = response.data
        totalEvents.value = parseInt(response.headers['x-total-count'] || '0')
      })
      .catch(() => {
        router.push({ name: 'network-error-view' })
      })
  })
})
</script>

<template>
  <h1 class="text-2xl font-bold text-center my-4">Events for Good</h1>

  <div class="flex flex-col items-center">
    <EventCard
      v-for="event in events"
      :key="event.id + '-event'"
      :event="event"
    />

    <div class="flex w-[290px] mt-4">
      <RouterLink
        id="page-prev"
        :to="{ name: 'event-list-view', query: { page: page - 1 } }"
        rel="prev"
        v-if="page !== 1"
        class="flex-1 text-left text-[#2c3e50] no-underline"
      >
        &#60; Prev Page
      </RouterLink>

      <RouterLink
        id="page-next"
        :to="{ name: 'event-list-view', query: { page: page + 1 } }"
        rel="next"
        v-if="hasNextPage"
        class="flex-1 text-right text-[#2c3e50] no-underline"
      >
        Next Page &#62;
      </RouterLink>
    </div>
  </div>
</template>