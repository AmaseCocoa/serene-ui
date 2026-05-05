<script setup lang="ts">
const props = withDefaults(defineProps<{
  progress?: number
  isLoading?: boolean
}>(), {
  progress: 0,
  isLoading: false
})

const height = "h-[2px]"
const transition = "transition-all duration-500 ease-out"
</script>

<template>
  <div 
    v-if="isLoading"
    class="fixed top-0 left-0 right-0 z-9999 pointer-events-none"
    :class="height"
  >
    <div class="absolute inset-0 bg-serene-primary/5" />
    
    <div 
      class="h-full bg-serene-primary shadow-[0_0_10px_rgba(var(--serene-primary-rgb),0.3)]"
      :class="transition"
      :style="{ width: `${progress}%` }"
    />
  </div>
</template>