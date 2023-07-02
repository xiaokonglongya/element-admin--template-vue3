import { createApp } from 'vue'
import element from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import 'normalize.css/normalize.css'
import 'virtual:uno.css'
import router from '@/router/index.ts'
import '@/router/interception.ts'
import store from './store'
import { getRouter } from '@/api/auth.ts'
import { addRouter } from '@/router/tools.ts'
// @ts-ignore
import { ElMessage } from 'element-plus'
const initAPP = async () => {
  const app = createApp(App)
  window.$message = ElMessage
  const routerList = await getRouter()
  addRouter(routerList)
  app.use(store)
  app.use(element)
  app.use(router)
  app.mount('#app')
}
initAPP()
