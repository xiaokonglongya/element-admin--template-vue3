import 'vue-router'
export {}
declare module 'vue-router' {
  interface RouteMeta {
    /**
     * 菜单的配置
     */
    title: string
    icon?: typeof import('@element-plus/icons')
    menu?: {
      /**是否可见 */
      visible?: boolean
      /**挂载的父节点，解决在子菜单后侧边菜单未选中 */
      parentName?: string
    }
  }
}
