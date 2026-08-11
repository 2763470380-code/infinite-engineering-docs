<script setup lang="ts">
import { ref } from 'vue'

const qq = '2602346931'
const message = ref('')
let resetTimer: ReturnType<typeof setTimeout> | undefined

function showMessage(text: string) {
  message.value = text
  if (typeof window !== 'undefined') {
    if (resetTimer) window.clearTimeout(resetTimer)
    resetTimer = window.setTimeout(() => {
      message.value = ''
    }, 2400)
  }
}

function fallbackCopy() {
  if (typeof document === 'undefined') return false

  const textarea = document.createElement('textarea')
  textarea.value = qq
  textarea.setAttribute('readonly', '')
  textarea.style.position = 'fixed'
  textarea.style.opacity = '0'
  document.body.appendChild(textarea)
  textarea.select()
  const copied = document.execCommand('copy')
  document.body.removeChild(textarea)
  return copied
}

async function copyQQ() {
  try {
    if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(qq)
      showMessage(`已复制 QQ：${qq}`)
      return
    }

    showMessage(fallbackCopy() ? `已复制 QQ：${qq}` : '复制失败，请手动复制 QQ。')
  } catch {
    showMessage(fallbackCopy() ? `已复制 QQ：${qq}` : '复制失败，请手动复制 QQ。')
  }
}
</script>

<template>
  <div class="copy-qq">
    <button type="button" @click="copyQQ">复制腐竹 QQ</button>
    <span class="copy-qq-status" aria-live="polite">{{ message }}</span>
  </div>
</template>
