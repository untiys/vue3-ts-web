import { createWebHashHistory, createRouter } from "vue-router"
import type { RouteRecordRaw } from "vue-router"

import { useCounterStore } from "../pinia/index"

export const childrenList: RouteRecordRaw[] = [
  {
    path: "flowerPpoints",
    meta: {
      title: "花积分",
      perPath: "/index",
    },
    component: () => import("@/views/flowerPoints/index.vue"),
  },
  {
    path: "earnPoints",
    meta: {
      title: "赚积分",
      perPath: "/index",
    },
    component: () => import("@/views/earnPoints/index.vue"),
  },
  {
    path: "my",
    meta: {
      title: "我的",
      perPath: "/index",
    },
    component: () => import("@/views/my/index.vue"),
  },
]

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/index/flowerPpoints",
  },
  {
    path: "/index",
    component: () => import("@/layout/index.vue"),
    children: childrenList,
  },
  {
    path: "/dataScreen",
    component: () => import("@/views/dataScreen/index.vue"),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

// 路由守卫
router.beforeEach((to, from, next) => {
  const store = useCounterStore()
  window?.axiosPromiseArr?.forEach((ele: any, index: number) => {
    ele.cancel() // 路由跳转之前，终止上一个页面正在请求的内容
    // 清空请求的参数
    delete window.axiosPromiseArr[index]
  })
  document.title = to.meta.title as string
  next()
  // const token = localStorage.getItem("token")
  // if (!token) {
  //   if (to.name === "login") {
  //     next()
  //   } else {
  //     next("/login")
  //   }
  // } else {
  //   // 断言类型
  //   document.title = to.meta.title as string
  //   next()
  // }
})

export default router
