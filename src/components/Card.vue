<script setup lang="ts">
import Stack from './atom/Stack.vue';

interface Props {
  variant?: 'white' | 'glass'
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'white',
  padding: 'lg'
})

const variantClasses = {
  white: "bg-white border-black/5 shadow-sm",
  glass: "bg-white/40 backdrop-blur-md border-white/40 shadow-sm"
}

const paddingClasses = {
  none: "p-0",
  sm: "p-6",
  md: "p-8",
  lg: "p-10"
}
</script>

<template>
  <div 
    class="rounded-4xl border transition-all duration-500"
    :class="[variantClasses[variant], paddingClasses[padding]]"
  >
    <Stack gap="lg">
      <div v-if="$slots.title" class="flex flex-col gap-2">
        <slot name="title" />
      </div>

      <div class="flex-1">
        <slot />
      </div>

      <div v-if="$slots.footer">
        <slot name="footer" />
      </div>
    </Stack>
  </div>
</template>