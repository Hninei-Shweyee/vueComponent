
<script setup lang="ts">
import StudentCard from '@/components/StudentCard.vue'
import type { Student } from '@/types'
import FlashMessage from '@/components/FlashMessage.vue'
import { ref, onMounted } from 'vue'
import StudentService from '@/services/StudentService'

const students = ref<Student[]>([])
const errorMessage = ref('')
onMounted(() => {
  StudentService.getStudents()
    .then((response) => {
        console.log(response.data)
      students.value = response.data
    })
    .catch((error) => {
      console.error('There was an error!', error)
      errorMessage.value = 'Failed to load students'
    })
})
</script>

<template>
  <FlashMessage v-if="errorMessage" :message="errorMessage" />
  <h1>Student List</h1>
  <!--new element-->
  <div class="events">
    <div v-for="student in students" :key="student.studentId" class="event-wrapper">
      <StudentCard :student="student" />
    </div>
  </div>
</template>
<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.event-wrapper {
  margin-bottom: 20px;
}
</style>

