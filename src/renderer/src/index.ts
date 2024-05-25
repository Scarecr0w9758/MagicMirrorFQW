import ElementPlus, { ElTooltip } from "element-plus"
import { createApp } from "vue"
import App from "./App.vue"
// import "./styles/element/index.scss"
import { createYmaps } from "vue-yandex-maps"

import { router } from "../../shared/router/router"

export const app = createApp(App)

const settings = {
  apiKey: "6fbb1ec6-d739-4e0e-bd69-7efc431dd052",
  lang: "ru_RU",
  coordorder: "latlong",
  enterprise: false,
  version: "2.1"
}

app.use(router)
app.use(
  createYmaps({
    apikey: "6fbb1ec6-d739-4e0e-bd69-7efc431dd052"
  })
)

app.use(ElementPlus)
