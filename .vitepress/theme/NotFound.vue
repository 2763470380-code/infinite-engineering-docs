<script setup lang="ts">
import { useData } from 'vitepress'

const { site } = useData()
</script>

<template>
  <main class="not-found-page">
    <p class="not-found-code">404</p>
    <h1>页面不存在或已经移动。</h1>
    <p>请检查链接，或从文档首页继续浏览。</p>
    <div class="not-found-actions">
      <a class="VPButton brand" :href="site.base">返回首页</a>
      <a class="VPButton alt" :href="`${site.base}guide/`">查看文档</a>
    </div>
  </main>
</template>
