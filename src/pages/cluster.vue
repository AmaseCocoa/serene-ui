<script setup lang="ts">
import Button from '../components/atom/Button.vue';
import Stack from "../components/atom/Stack.vue";
import Cluster from "../components/atom/Cluster.vue";
import Card from "../components/Card.vue";
import SerenePage from "../components/base/Page.vue";
import SereneSection from "../components/base/Section.vue";

const tags = ['Design', 'Development', 'Vue.js', 'TailwindCSS', 'Minimalism', 'UI/UX']
</script>

<template>
  <SerenePage 
    title="Cluster" 
    description="Horizontal layouts that wrap naturally. Perfect for buttons, tags, and groups of elements."
  >
    
    <SereneSection title="Button Groups">
      <Cluster gap="md">
        <Button variant="solid">Accept All</Button>
        <Button variant="outline">Settings</Button>
        <Button variant="ghost">Decline</Button>
      </Cluster>
    </SereneSection>

    <SereneSection title="Tag Cloud / Meta info">
      <Card variant="glass" padding="md" class="max-w-xl">
        <Stack gap="lg">
          <div class="space-y-2">
            <h3 class="text-lg font-light">Article Categories</h3>
            <p class="text-xs text-serene-text/40">Select topics you are interested in.</p>
          </div>
          
          <Cluster gap="sm">
            <Button 
              v-for="tag in tags" 
              :key="tag" 
              variant="outline" 
              size="sm"
              class="hover:bg-serene-primary/5 hover:border-serene-primary/20"
            >
              {{ tag }}
            </Button>
          </Cluster>
        </Stack>
      </Card>
    </SereneSection>

    <SereneSection title="Alignment & Distribution">
      <div class="bg-black/5 p-8 rounded-3xl">
        <Cluster justify="between" align="center">
          <Stack>
            <span class="text-sm font-medium">New Notifications</span>
            <span class="text-xs text-serene-text/50">You have 3 unread messages</span>
          </Stack>
          <Cluster gap="sm">
            <Button variant="ghost" size="sm">Mark all as read</Button>
            <Button variant="solid" size="sm">View All</Button>
          </Cluster>
        </Cluster>
      </div>
    </SereneSection>

  </SerenePage>
</template>