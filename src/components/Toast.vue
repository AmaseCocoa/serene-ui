<script setup lang="ts">
import { ref } from 'vue'

export interface Toast {
  id: number
  message: string
  type?: 'info' | 'success' | 'error'
}

const toasts = ref<Toast[]>([])
let count = 0

const add = (message: string, type: Toast['type'] = 'info') => {
  const id = count++
  toasts.value.push({ id, message, type })
  setTimeout(() => remove(id), 3000)
}

const remove = (id: number) => {
  toasts.value = toasts.value.filter(t => t.id !== id)
}

defineExpose({ add })
</script>

<template>
  <Teleport to="body">
    <div class="fixed bottom-8 right-8 z-100 flex flex-col gap-3 pointer-events-none">
      <TransitionGroup name="toast">
        <div
          v-for="toast in toasts"
          :key="toast.id"
          class="pointer-events-auto min-w-70 px-6 py-4 rounded-2xl bg-white/80 backdrop-blur-xl border border-black/5 shadow-lg shadow-black/5 flex items-center justify-between group"
        >
          <div class="flex items-center gap-3">
            <div 
              class="w-1.5 h-1.5 rounded-full" 
              :class="{
                'bg-calm-primary': toast.type === 'info' || !toast.type,
                'bg-emerald-400': toast.type === 'success',
                'bg-rose-400': toast.type === 'error'
              }"
            />
            <span class="text-sm font-light tracking-wide text-calm-text/80">
              {{ toast.message }}
            </span>
          </div>
          
          <button @click="remove(toast.id)" class="opacity-0 group-hover:opacity-100 transition-opacity p-1">
             <div class="w-3 h-px bg-calm-text/20 rotate-45 translate-y-[0.5px]"></div>
             <div class="w-3 h-px bg-calm-text/20 -rotate-45 translate-y-[-0.5px]"></div>
          </button>
        </div>
      </TransitionGroup>
    </div>
  </Teleport>
</template>

<style scoped>
.toast-enter-active,
.toast-leave-active {
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
}

.toast-enter-from {
  opacity: 0;
  transform: translateX(20px) scale(0.95);
}

.toast-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

.toast-move {
  transition: transform 0.4s ease;
}
</style>