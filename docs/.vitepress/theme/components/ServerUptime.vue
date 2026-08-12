<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const openedAt = new Date(2025, 11, 15, 0, 0, 0)
const now = ref(new Date())
let timer: ReturnType<typeof setInterval> | undefined

const days = computed(() => Math.max(0, Math.floor((now.value.getTime() - openedAt.getTime()) / 86_400_000)))

onMounted(() => {
  timer = setInterval(() => {
    now.value = new Date()
  }, 60_000)
})

onBeforeUnmount(() => {
  if (timer) clearInterval(timer)
})
</script>

<template>
  <span class="server-uptime">{{ days }}</span>
</template>
