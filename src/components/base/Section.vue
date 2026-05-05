<script setup lang="ts">
const props = defineProps<{
  title: string,
  description?: string
}>()
</script>

<template>
    <div class="mb-6">
        <div class="mb-8">
            <h2 class="text-2xl font-light tracking-widest text-Serene-text mb-4" :id="props.title">
                {{ props.title }}
            </h2>
            <p class="text-sm text-Serene-text/60 font-light leading-relaxed max-w-2xl" v-if="props.description">
                {{ props.description }}
            </p>
        </div>
    
        <slot />
    </div>
</template>