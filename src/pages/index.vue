<script setup lang="ts">
import Button from '../components/atom/Button.vue';

import Stack from "../components/atom/Stack.vue";
import SerenePage from "../components/base/Page.vue";
import SereneSection from "../components/base/Section.vue";
</script>

<template>
    <SerenePage title="Welcome to SereneUI" description="SereneUI is component library designed for calm websites.">
        <SereneSection title="Button">
            <Stack gap="sm" align="start">
              <Button variant="solid">Main Action</Button>
              <Button variant="glass" size="sm">Sub Action</Button>
            </Stack>
        </SereneSection>
    </SerenePage>
</template>
