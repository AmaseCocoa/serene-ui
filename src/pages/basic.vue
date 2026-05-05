<script setup lang="ts">
import { ref } from "vue";

import Button from "../components/atom/Button.vue";
import Stack from "../components/atom/Stack.vue";
import Cluster from "../components/atom/Cluster.vue";
import SerenePage from "../components/base/Page.vue";
import SereneSection from "../components/base/Section.vue";
import Toast from "../components/Toast.vue";

const demoBoxClass =
    "w-full h-12 bg-serene-primary/10 border border-serene-primary/20 rounded-lg flex items-center justify-center text-serene-primary font-light text-sm";

const tags = ["Design", "Development", "Vue.js", "TailwindCSS", "Minimalism"];

const toastRef = ref<InstanceType<typeof Toast> | null>(null);

const notify = (msg: string, type: "info" | "success" | "error" | undefined) => {
  toastRef.value?.add(msg, type)
}
</script>

<template>
    <SerenePage title="Basics">
        <Toast ref="toastRef" />
        <SereneSection title="Button">
            <Cluster gap="md">
                <Button @click="notify('Button Clicked!', 'info')" variant="solid">Click here!</Button>
                <Button @click="notify('Settings Opened!', 'success')" variant="outline">Settings</Button>
                <Button @click="notify('Operation Cancelled!', 'error')" variant="ghost">Cancel</Button>
            </Cluster>
        </SereneSection>
        <SereneSection title="Stack (Vertical)">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div class="space-y-8">
                    <h3
                        class="text-[10px] uppercase tracking-widest text-serene-text/40"
                    >
                        Gap Variations
                    </h3>
                    <div class="space-y-6">
                        <div>
                            <p class="text-[10px] text-serene-text/30 mb-2">
                                gap="sm" (8px)
                            </p>
                            <Stack gap="sm">
                                <div :class="demoBoxClass">Item 1</div>
                                <div :class="demoBoxClass">Item 2</div>
                            </Stack>
                        </div>
                        <div>
                            <p class="text-[10px] text-serene-text/30 mb-2">
                                gap="lg" (32px)
                            </p>
                            <Stack gap="lg">
                                <div :class="demoBoxClass">Item 1</div>
                                <div :class="demoBoxClass">Item 2</div>
                            </Stack>
                        </div>
                    </div>
                </div>

                <div class="space-y-8">
                    <h3
                        class="text-[10px] uppercase tracking-widest text-serene-text/40"
                    >
                        Alignment
                    </h3>
                    <div
                        class="space-y-12 bg-white p-8 rounded-2xl border border-serene-text/5"
                    >
                        <div>
                            <p class="text-xs text-serene-text/30 mb-3">
                                align="start"
                            </p>
                            <Stack align="start" gap="sm">
                                <div
                                    class="px-4 py-2 bg-serene-text text-white text-xs rounded-full"
                                >
                                    Short
                                </div>
                                <div
                                    class="px-8 py-2 bg-serene-text text-white text-xs rounded-full"
                                >
                                    Something Longer
                                </div>
                            </Stack>
                        </div>

                        <div>
                            <p class="text-xs text-serene-text/30 mb-3">
                                align="center"
                            </p>
                            <Stack align="center" gap="sm">
                                <div
                                    class="px-4 py-2 bg-serene-text text-white text-xs rounded-full"
                                >
                                    Short
                                </div>
                                <div
                                    class="px-8 py-2 bg-serene-text text-white text-xs rounded-full"
                                >
                                    Something Longer
                                </div>
                            </Stack>
                        </div>

                        <div>
                            <p class="text-xs text-serene-text/30 mb-3">
                                align="end"
                            </p>
                            <Stack align="end" gap="sm">
                                <div
                                    class="px-4 py-2 bg-serene-text text-white text-xs rounded-full"
                                >
                                    Short
                                </div>
                                <div
                                    class="px-8 py-2 bg-serene-text text-white text-xs rounded-full"
                                >
                                    Something Longer
                                </div>
                            </Stack>
                        </div>
                    </div>
                </div>
            </div>
        </SereneSection>

        <SereneSection title="Cluster (Horizontal)">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div class="space-y-6">
                    <h3
                        class="text-[10px] uppercase tracking-widest text-serene-text/40"
                    >
                        Button Groups
                    </h3>
                    <Cluster gap="md">
                        <Button variant="solid">Main Action</Button>
                        <Button variant="outline">Settings</Button>
                        <Button variant="ghost">Cancel</Button>
                    </Cluster>
                </div>

                <div class="space-y-6">
                    <h3
                        class="text-[10px] uppercase tracking-widest text-serene-text/40"
                    >
                        Auto-wrap Tags
                    </h3>
                    <Cluster gap="sm">
                        <Button
                            v-for="tag in tags"
                            :key="tag"
                            variant="glass"
                            size="sm"
                        >
                            {{ tag }}
                        </Button>
                    </Cluster>
                </div>
            </div>
        </SereneSection>

        <SereneSection title="Practical Example">
            <div
                class="max-w-md mx-auto bg-white p-8 rounded-3xl shadow-sm border border-black/5"
            >
                <Stack gap="lg">
                    <Cluster justify="between" align="start">
                        <Stack gap="sm">
                            <h3 class="text-lg font-light">
                                Subscription Plan
                            </h3>
                            <p class="text-xs text-serene-text/40">
                                Manage your billing
                            </p>
                        </Stack>
                        <span
                            class="text-[10px] px-2 py-1 bg-serene-primary/10 text-serene-primary rounded tracking-wider"
                            >PRO</span
                        >
                    </Cluster>

                    <p class="text-sm text-serene-text/60 leading-relaxed">
                        Select a plan that works best for your creative
                        workflow.
                    </p>

                    <Cluster gap="sm" justify="end">
                        <Button variant="ghost" size="sm">Details</Button>
                        <Button variant="solid" size="sm">Upgrade</Button>
                    </Cluster>
                </Stack>
            </div>
        </SereneSection>
    </SerenePage>
</template>
