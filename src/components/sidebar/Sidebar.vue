<script setup lang="ts">
import Stack from '../atom/Stack.vue';

defineProps<{
  title?: string
}>()
</script>

<template>
  <aside class="w-64 min-h-screen sticky top-0 flex flex-col border-r border-serene-text/5 bg-white/50 backdrop-blur-xl p-4 shrink-0">
    
    <div v-if="title" class="px-4 py-8 text-sm font-light tracking-[0.2em] text-serene-text/80 uppercase shrink-0">
      {{ title }}
    </div>

    <nav class="grow overflow-y-auto scrollbar-hide">
      <Stack gap="sm">
        <slot />
      </Stack>
    </nav>

    <div v-if="$slots.footer" class="mt-auto pt-4 border-t border-serene-text/5 shrink-0">
      <Stack gap="sm">
        <slot name="footer" />
      </Stack>
    </div>
  </aside>
</template>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>