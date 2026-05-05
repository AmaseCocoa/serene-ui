import { ref } from 'vue'

const progress = ref(0)
const isLoading = ref(false)
let timer: any = null

export const useRoutingProgress = () => {
  const start = () => {
    isLoading.value = true
    progress.value = 0
    
    timer = setInterval(() => {
      if (progress.value < 90) {
        progress.value += Math.random() * 10
      }
    }, 200)
  }

  const finish = () => {
    progress.value = 100
    setTimeout(() => {
      isLoading.value = false
      setTimeout(() => (progress.value = 0), 400)
      clearInterval(timer)
    }, 300)
  }

  return { progress, isLoading, start, finish }
}