import { RouteRecordRaw } from "vue-router"

import { routerKeys } from "@/shared/router/router-keys"

export const routesAuth = [
  {
    path: routerKeys.AUTH.children.LOGIN.path,
    name: routerKeys.AUTH.children.LOGIN.name,
    component: () => import("@/renderer/src/pages/auth/SignIn.vue"),
    meta: { needAuth: false }
  },
  {
    path: routerKeys.AUTH.children.REGISTRATION.path,
    name: routerKeys.AUTH.children.REGISTRATION.name,
    component: () => import("@/renderer/src/pages/auth/Registration.vue"),
    meta: { needAuth: false }
  }
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
