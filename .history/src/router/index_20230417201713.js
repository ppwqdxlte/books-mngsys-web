import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  },

  {
    path: '/system',
    component: Layout,
    name: 'System',
    meta: { title: '系统管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: '/sysUserList',
        name: 'SysUserList',
        component: () => import('@/views/system/sysUserList'),
        meta: { title: '用户管理', icon: 'user' }
      },
      {
        path: '/sysRoleList',
        name: 'SysRoleList',
        component: () => import('@/views/system/sysRoleList'),
        meta: { title: '角色管理', icon: 'table' }
      },
      {
        path: '/sysMenuList',
        name: 'SysMenuList',
        component: () => import('@/views/system/sysMenuList'),
        meta: { title: '菜单管理', icon: 'tree' }
      }
    ]
  },
  {
    path: '/reader',
    component: Layout,
    name: 'Reader',
    meta: { title: '读者管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: '/readerList',
        name: 'ReaderList',
        component: () => import('@/views/reader/readerList'),
        meta: { title: '读者管理', icon: 'user' }
      }
    ]
  },
  {
    path: '/book',
    component: Layout,
    name: 'Book',
    meta: { title: '图书管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: '/bookCategory',
        name: 'BookCategory',
        component: () => import('@/views/book/bookCategory'),
        meta: { title: '书籍分类', icon: 'table' }
      },
      {
        path: '/bookList',
        name: 'BookList',
        component: () => import('@/views/book/bookList'),
        meta: { title: '书籍管理', icon: 'form' }
      }
    ]
  },
  {
    path: '/borrow',
    component: Layout,
    name: 'Borrow',
    meta: { title: '借阅管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: '/borrowList',
        name: 'BorrowList',
        component: () => import('@/views/borrow/borrowList'),
        meta: { title: '借书管理', icon: 'example' }
      },
      {
        path: '/returnList',
        name: 'ReturnList',
        component: () => import('@/views/borrow/returnList'),
        meta: { title: '还书管理', icon: 'link' }
      },
      {
        path: '/borrowSearch',
        name: 'BorrowSearch',
        component: () => import('@/views/borrow/borrowSearch'),
        meta: { title: '借阅查询', icon: 'table' }
      }
    ]
  },
  {
    path: '/bulletin',
    component: Layout,
    name: 'Bulletin',
    meta: { title: '公告管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: '/bulletinList',
        name: 'BulletinList',
        component: () => import('@/views/bulletin/bulletinList'),
        meta: { title: '公告管理', icon: 'dashboard' }
      }
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: 'Nested',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: 'Menu1' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'Menu1-2',
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-2',
                meta: { title: 'Menu1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'Menu1-3',
            meta: { title: 'Menu1-3' }
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        meta: { title: 'menu2' }
      }
    ]
  },

  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: { title: 'External Link', icon: 'link' }
      }
    ]
  }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
