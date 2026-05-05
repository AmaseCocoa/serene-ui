import { createApp } from 'vue'

import App from './App.vue'
import './style.css'

import { routes } from 'vue-router/auto-routes'
import { createRouter, createWebHashHistory } from 'vue-router'

const app = createApp(App)

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
app.use(router)

app.mount('#app')
