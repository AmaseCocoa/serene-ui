<script setup lang="ts">
import { RouterLink } from 'vue-router'

interface Props {
  label: string
  to?: string
  href?: string
  icon?: any
  exact?: boolean
}

defineProps<Props>()

const baseClass = "group flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-500 ease-in-out text-sm font-light tracking-wide outline-none select-none"
const activeClass = "bg-serene-primary/10 text-serene-primary font-normal"
const inactiveClass = "text-serene-text/50 hover:text-serene-text hover:bg-black/5"
</script>

<template>
  <RouterLink 
    v-if="to"
    :to="to" 
    :exact="exact"
    custom
    v-slot="{ href: routerHref, navigate, isActive, isExactActive }"
  >
    <a
      :href="routerHref"
      @click="navigate"
      :class="[
        baseClass, 
        (exact ? isExactActive : isActive) ? activeClass : inactiveClass
      ]"
      :aria-current="(exact ? isExactActive : isActive) ? 'page' : undefined"
    >
      <component :is="icon" v-if="icon" class="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
      <span class="flex-1">{{ label }}</span>
      <div 
        class="w-1 h-1 rounded-full bg-serene-primary transition-all duration-500 shadow-[0_0_8px_rgba(var(--serene-primary-rgb),0.5)]"
        :class="(exact ? isExactActive : isActive) ? 'scale-100 opacity-100' : 'scale-0 opacity-0'"
      />
    </a>
  </RouterLink>

  <a
    v-else-if="href"
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    :class="[baseClass, inactiveClass]"
  >
    <component :is="icon" v-if="icon" class="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
    <span class="flex-1">{{ label }}</span>
    </a>
</template>