import { defineComponent } from 'vue'
import { RouteRecordRaw, useRoute, useRouter } from 'vue-router'
import { cloneDeep } from 'lodash-es'
import { useConfigStore } from '@/store/modules/config'
import './style.scss'
export default defineComponent({
  name: 'Menu',
  setup() {
    const route = useRoute()
    const router = useRouter()
    const global_config = useConfigStore()
    const getMenu = () => {
      // 所有layout下的路由
      const options = cloneDeep(router.options.routes.find((e) => e.path === '/')) || { children: [] }
      // 递归删除不需要的路由
      const filterMenu = (options?: RouteRecordRaw[]) => {
        if (!options) return
        options.forEach((e, i: number) => {
          if (e.children) {
            filterMenu(e.children)
          }

          // 删除配置了不可见的路由
          if (e.meta && e.meta.menu?.visible === false) {
            options.splice(i, 1)
          }
          // 删除没有子路由的children
          if (e.children?.length === 0) {
            delete e.children
          }
        })
      }
      filterMenu(options.children)
      return options
    }

    const VTitle = (title: string = '', Vicon: any) => {
      return (
        <>
          <el-icon>
            <Vicon />
          </el-icon>
          <span> {title} </span>
        </>
      )
    }

    const getVMenu = (menus: RouteRecordRaw[]) => {
      const vMenu: any[] = []
      menus.forEach((e) => {
        if (e.children) {
          vMenu.push(
            <el-sub-menu index={e.path} v-slots={{ title: () => VTitle(e.meta?.title, e.meta?.icon) }}>
              {getVMenu(e.children)}
            </el-sub-menu>
          )
        } else {
          vMenu.push(
            <el-menu-item class="hover:bg-blue-500" index={e.path}>
              {VTitle(e.meta?.title, e.meta?.icon)}
            </el-menu-item>
          )
        }
      })
      return vMenu
    }
    const renderMenu = () => {
      const meun = getMenu()
      let menus = getVMenu(meun.children || [])
      return menus
    }
    const defaultActive = route.path
    return () => {
      return (
        <div class="menu h-[100%]">
          <el-menu
            class="border-none"
            collapse={global_config.config.isExpand}
            collapse-transition={false}
            default-active={defaultActive}
            router={true}>
            {renderMenu()}
          </el-menu>
        </div>
      )
    }
  },
})
