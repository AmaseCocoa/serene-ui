<script setup lang="ts">
import Button from "../components/atom/Button.vue";
import Stack from "../components/atom/Stack.vue";
import SerenePage from "../components/base/Page.vue";

const demoBoxClass =
    "w-full h-12 bg-serene-primary/10 border border-serene-primary/20 rounded-lg flex items-center justify-center text-serene-primary font-light text-sm";
</script>

<template>
    <SerenePage title="Stack">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
            <section>
                <h2
                    class="text-xs uppercase tracking-widest text-serene-text/40 mb-8"
                >
                    Gap Variations
                </h2>
                <div class="space-y-12">
                    <div>
                        <p class="text-xs text-serene-text/30 mb-3">
                            gap="sm" (8px)
                        </p>
                        <Stack gap="sm">
                            <div :class="demoBoxClass">Item 1</div>
                            <div :class="demoBoxClass">Item 2</div>
                            <div :class="demoBoxClass">Item 3</div>
                        </Stack>
                    </div>

                    <div>
                        <p class="text-xs text-serene-text/30 mb-3">
                            gap="md" (16px) - Default
                        </p>
                        <Stack gap="md">
                            <div :class="demoBoxClass">Item 1</div>
                            <div :class="demoBoxClass">Item 2</div>
                        </Stack>
                    </div>

                    <div>
                        <p class="text-xs text-serene-text/30 mb-3">
                            gap="lg" (32px)
                        </p>
                        <Stack gap="lg">
                            <div :class="demoBoxClass">Item 1</div>
                            <div :class="demoBoxClass">Item 2</div>
                        </Stack>
                    </div>
                </div>
            </section>

            <section>
                <h2
                    class="text-xs uppercase tracking-widest text-serene-text/40 mb-8"
                >
                    Alignments
                </h2>
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
            </section>

            <section class="md:col-span-2 mt-8">
                <h2
                    class="text-xs uppercase tracking-widest text-serene-text/40 mb-8"
                >
                    Practical Example (Card Content)
                </h2>
                <div
                    class="max-w-sm bg-white p-10 rounded-3xl shadow-sm border border-black/5"
                >
                    <Stack gap="lg">
                        <Stack gap="sm">
                            <h3 class="text-xl font-light">
                                Subscription Plan
                            </h3>
                            <p
                                class="text-sm text-serene-text/60 leading-relaxed"
                            >
                                Choose the plan that fits your lifestyle. You
                                can change this anytime in your settings.
                            </p>
                        </Stack>

                        <Stack gap="md">
                            <Button variant="solid" class="w-full"
                                >Upgrade Now</Button
                            >
                            <Button variant="ghost" class="w-full text-xs"
                                >View all features</Button
                            >
                        </Stack>
                    </Stack>
                </div>
            </section>
        </div>
    </SerenePage>
</template>
