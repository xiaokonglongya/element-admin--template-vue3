import { createApp } from 'vue'
import element from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import 'normalize.css/normalize.css'
import 'virtual:uno.css'
import router from '@/router/index.ts'
import '@/router/interception.ts'
import store from './store'

const initAPP = async () => {
  const app = createApp(App)
  app.use(store)
  app.use(router)
  app.use(element)
  app.mount('#app')
}
initAPP()
