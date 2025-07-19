<template>
    <div class="event-class">
  <div class="event-info">
    <p>{{ event.category }}</p>
    <p>{{ event.organizer }}</p>
  </div>
</div>
</template>

<script setup lang="ts">
import type { Event } from '@/types'

defineProps<{
  event: Event
}>()
</script>

<style scoped>
.event-info {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.event-info:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
