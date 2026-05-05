<script setup lang="ts">
import Stack from '../atom/Stack.vue';

defineProps<{
  title?: string
}>()
</script>

<template>
  <div class="py-3 first:pt-0">
    <p 
      v-if="title" 
      class="px-4 mb-2 text-[10px] uppercase tracking-[0.25em] text-calm-text/30 font-medium select-none"
    >
      {{ title }}
    </p>

    <Stack gap="sm">
      <slot />
    </Stack>
  </div>
</template>