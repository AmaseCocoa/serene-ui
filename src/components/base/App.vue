<script setup lang="ts">
import { useRouter } from "vue-router";
import Progress from "../Progress.vue";
import { useRoutingProgress } from "../../composables/useRoutingProgress";

const { progress, isLoading, start, finish } = useRoutingProgress();
const router = useRouter();

router.beforeEach(() => start());
router.afterEach(() => finish());
</script>

<template>
    <Progress :progress="progress" :is-loading="isLoading" />
    <div class="flex min-h-screen">
        <slot />
    </div>
</template>
