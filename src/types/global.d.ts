import { Message } from 'element-plus/es/components/index.js'

declare global {
  interface Window {
    $message: Message
  }
}
