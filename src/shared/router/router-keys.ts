export const routerKeys = {
  HOME: {
    path: "/",
    name: "home"
  },
  MAIN: {
    path: "/main",
    name: "main"
  },
  WIDGETS: {
    path: "/widgets",
    name: "widgets"
  },
  AUTH: {
    path: "/auth",
    name: "auth",
    children: {
      REGISTRATION: {
        path: "/auth/registration",
        name: "auth-registration"
        // getPath: (pageId) => `/about-page/${pageId}`
      },
      LOGIN: {
        path: "/auth/login",
        name: "auth-login"
      }
      // DETAIL_CREATE: {
      //   path: "/about-page/create-new",
      //   name: "about-page-create-new"
      //   // getPath: (pageId) => `/about-page/${pageId}/edit`,
      // },
      // DETAIL_EDIT: {
      //   path: "/about-page/:pageId/edit",
      //   name: "about-page-detail-edit",
      //   getPath: (pageId) => `/about-page/${pageId}/edit`
      // }
    }
  }
}
