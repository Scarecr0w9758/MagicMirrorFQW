import { RouteRecordRaw } from "vue-router"

import { routerKeys } from "@/shared/router/router-keys"

export const routesMain = [
  // {
  //   path: routerKeys.MAIN.path,
  //   name: routerKeys.MAIN.name,
  //   component: () => import("@/renderer/src/pages/main/Main.vue")
  // }
  // {
  //   path: routerKeys.TFA_LOGIN.path,
  //   name: routerKeys.TFA_LOGIN.name,
  //   beforeEnter: (_to, _from, next) => {
  //     const viewerStore = useViewerStore()
  //     if (viewerStore.tfaResponse) next()
  //     else next(appRoutes.LOGIN.path)
  //   },
  //   component: () => import("@/pages/authentication/basic-flow/Tfa.vue"),
  //   meta: { needAuth: false }
  // }
] as RouteRecordRaw[]
