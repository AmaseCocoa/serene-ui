<script setup lang="ts">
const props = withDefaults(defineProps<{
  gap?: 'sm' | 'md' | 'lg' | 'xl'
  align?: 'start' | 'center' | 'end' | 'stretch'
}>(), {
  gap: 'md',
  align: 'stretch'
})

const gapMap = {
  sm: 'space-y-2',
  md: 'space-y-4',
  lg: 'space-y-8',
  xl: 'space-y-12'
}

const alignMap = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch'
}
</script>

<template>
  <div :class="['flex flex-col', gapMap[gap], alignMap[align]]">
    <slot />
  </div>
</template>