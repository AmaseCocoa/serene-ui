<script setup lang="ts">
interface Props {
  variant?: 'solid' | 'ghost' | 'outline' | 'glass'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'solid',
  size: 'md',
  disabled: false
})

const baseClass = "inline-flex items-center justify-center rounded-full transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] font-light tracking-wide outline-none select-none active:scale-[0.98] disabled:opacity-40 disabled:pointer-events-none"

const sizeClasses = {
  sm: "px-4 py-1.5 text-xs",
  md: "px-6 py-2.5 text-sm",
  lg: "px-8 py-3.5 text-base"
}

const variantClasses = {
  solid: "bg-serene-primary text-white shadow-sm hover:shadow-md hover:bg-serene-primary/95 shadow-serene-primary/20",
  
  ghost: "bg-transparent text-serene-text/80 hover:text-serene-text hover:bg-serene-text/5",
  
  outline: "border border-serene-text/10 text-serene-text/90 hover:border-serene-text/30 hover:bg-serene-text/[0.02]",

  glass: "bg-white/40 backdrop-blur-md border border-white/20 text-serene-text shadow-sm hover:bg-white/60"
}
</script>

<template>
  <button 
    :class="[baseClass, sizeClasses[size], variantClasses[variant]]"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>