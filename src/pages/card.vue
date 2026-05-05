<script setup lang="ts">
import Button from '../components/atom/Button.vue';
import Stack from "../components/atom/Stack.vue";
import Cluster from "../components/atom/Cluster.vue";
import Card from "../components/Card.vue";
import SerenePage from "../components/base/Page.vue";
import SereneSection from "../components/base/Section.vue";
</script>

<template>
  <SerenePage 
    title="Card" 
    description="Versatile containers for grouping related content with consistent shadows and radius."
  >
    
    <SereneSection title="Variants">
      <Cluster gap="lg">
        <Card variant="white" class="max-w-sm">
          <template #title>
            <h3 class="text-xl font-light">White Base</h3>
          </template>
          <p class="text-sm text-serene-text/60">
            The default card style. Uses a subtle border and shadow to create a clean, lifted effect on any background.
          </p>
        </Card>

        <Card variant="glass" class="max-w-sm">
          <template #title>
            <h3 class="text-xl font-light">Glass Texture</h3>
          </template>
          <p class="text-sm text-serene-text/60">
            A translucent card with backdrop blur. Best used over colorful or textured backgrounds to maintain a "Serene" atmosphere.
          </p>
        </Card>
      </Cluster>
    </SereneSection>

    <SereneSection title="Card Layouts">
      <Card variant="white" class="max-w-2xl">
        <template #title>
          <Cluster justify="between" align="start">
            <Stack>
              <h3 class="text-xl font-light">Project Alpha</h3>
              <p class="text-xs text-serene-text/40">Last updated 2 hours ago</p>
            </Stack>
            <div class="px-3 py-1 rounded-full bg-serene-primary/10 text-serene-primary text-[10px] font-medium uppercase tracking-wider">
              In Progress
            </div>
          </Cluster>
        </template>

        <p class="text-sm text-serene-text/70 leading-relaxed">
          This layout uses the title slot for complex headers. By combining Cluster and Stack inside the title slot, you can create information-rich card headers while maintaining visual hierarchy.
        </p>

        <template #footer>
          <Cluster justify="end" gap="sm">
            <Button variant="ghost" size="sm">Archive</Button>
            <Button variant="solid" size="sm">View Details</Button>
          </Cluster>
        </template>
      </Card>
    </SereneSection>

    <SereneSection title="Padding Densities">
      <Cluster gap="md" align="start">
        <Card padding="sm" variant="white" class="w-48 text-center">
          <span class="text-xs font-medium text-serene-text/40 uppercase tracking-tighter">Small Padding</span>
        </Card>
        <Card padding="md" variant="white" class="w-48 text-center">
          <span class="text-xs font-medium text-serene-text/40 uppercase tracking-tighter">Medium Padding</span>
        </Card>
        <Card padding="lg" variant="white" class="w-48 text-center">
          <span class="text-xs font-medium text-serene-text/40 uppercase tracking-tighter">Large Padding</span>
        </Card>
      </Cluster>
    </SereneSection>

    <SereneSection title="Visual Integration">
      <Card padding="none" variant="white" class="max-w-sm overflow-hidden group">
        <div class="h-48 bg-serene-primary/5 overflow-hidden">
          <div class="w-full h-full bg-linear-to-br from-serene-primary/20 to-transparent flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
             <span class="text-serene-primary/20 font-light text-4xl italic">Something Image</span>
          </div>
        </div>
        <div class="p-8">
          <Stack gap="md">
            <h3 class="text-lg font-light">Bespoke Curation</h3>
            <p class="text-sm text-serene-text/60 leading-relaxed">
              By setting padding to "none", you can place media or full-width elements inside the card.
            </p>
            <Button variant="outline" size="sm" class="w-full">Read More</Button>
          </Stack>
        </div>
      </Card>
    </SereneSection>

  </SerenePage>
</template>