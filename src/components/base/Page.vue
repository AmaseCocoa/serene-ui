<script setup lang="ts">
const props = defineProps<{
  title?: string,
  description?: string
}>()
</script>

<template>
    <div>
        <header class="mb-16" v-if="props.title">
            <h1 class="text-4xl font-light tracking-widest text-Serene-text mb-4">
                {{ props.title }}
            </h1>
            <p class="text-Serene-text/60 font-light leading-relaxed max-w-2xl" v-if="props.description">
                {{ props.description }}
            </p>
        </header>
        
        <slot />
    </div>
</template>