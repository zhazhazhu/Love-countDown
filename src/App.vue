<script setup lang="ts">
import { ConfigProvider } from 'vant'
</script>

<template>
  <ConfigProvider theme="light">
    <main font-sans text="center gray-700 dark:gray-200">
      <RouterView />
      <Footer />
    </main>
  </ConfigProvider>
</template>
