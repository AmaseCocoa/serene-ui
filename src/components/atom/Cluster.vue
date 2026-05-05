<script setup lang="ts">
const props = withDefaults(defineProps<{
  gap?: 'sm' | 'md' | 'lg'
  justify?: 'start' | 'center' | 'end' | 'between'
  align?: 'center' | 'start' | 'end'
}>(), {
  gap: 'md',
  justify: 'start',
  align: 'center'
})

const gapMap = {
  sm: 'gap-2',
  md: 'gap-4',
  lg: 'gap-8'
}

const justifyMap = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between'
}

const alignMap = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end'
}
</script>

<template>
  <div :class="['flex flex-wrap', gapMap[gap], justifyMap[justify], alignMap[align]]">
    <slot />
  </div>
</template>