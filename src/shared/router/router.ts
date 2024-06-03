import { createRouter, createWebHistory } from "vue-router"

import { routesAuth } from "@/shared/router/routes/routes-auth"
import { routesMain } from "@/shared/router/routes/routes-main"
import { routerKeys } from "@/shared/router/router-keys"
// import { initGuards } from "@/shared/lib/guards/initGuards"

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "main-root",
      path: routerKeys.MAIN.path,
      alias: routerKeys.HOME.path,
      component: () => import("@/renderer/src/pages/main/Main.vue")
    },
    {
      path: routerKeys.AUTH.path,
      name: "auth",
      component: () => import("@/renderer/src/pages/auth/IndexAuth.vue"),
      children: routesAuth
    }
    // {
    //   path: appRoutes.HOME.path,
    //   component: () => import('@/layout/Testing.vue'),
    //   children: [...routesSurveyPassage, ...routesRecruitingOffer, ...routesQuestionnaireDetail]
    // },
    // {
    //   path: appRoutes.HOME.path,
    //   component: () => import('@/layout/EducationLayout.vue'),
    //   children: [...routesEducationPassage]
    // },
    // {
    //   path: appRoutes.HOME.path,
    //   component: () => import('@/layout/career-layout/CareerLayout.vue'),
    //   children: [...routesCareers]
    // },
    // {
    //   path: appRoutes.HOME.path,
    //   component: () => import('@/layout/AdminLayout.vue'),
    //   children: [...routesAdmin]
    // },
    // ...routesFileDownload
  ]
})

// initGuards(router)
