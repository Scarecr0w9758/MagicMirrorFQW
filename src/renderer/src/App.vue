<script setup lang="ts">
import { h, reactive, ref, defineAsyncComponent, computed, onMounted, provide } from "vue"
import BaseClocks from "./widgets/datetime/clock/BaseClocks.vue"
// import { GridItem, GridLayout } from "vue3-drr-grid-layout";
import Draggable from "vuedraggable/src/vuedraggable"
import MainGridPage from "./widgets/MainGridPage.vue"

import { useRoute, useRouter } from "vue-router"
import type { YMap } from "@yandex/ymaps3-types"
import { YandexMap, YandexMapDefaultSchemeLayer } from "vue-yandex-maps"
import MainDraggablePage from "./widgets/MainDraggablePage.vue"
import BaseWeatherWidget from "./widgets/weather/BaseWeatherWidget.vue"
import { getUserWidgets } from "../../../src/shared/api/requests/main-page/main-page"
import { registerUser } from "../../../src/shared/api/requests/user/user"
// import { getUserWidgets } from "@/shared/api/requests/main-page/main-page"
// import { registerUser } from "@/shared/api/requests/user/user"
import { routerKeys } from "../../../src/shared/router/router-keys"
import { ERRORS_LIST } from "@/shared/symbols/errors"
import { BaseError } from "@/shared/types/global/errors-types"

const ipcHandle = () => window.electron.ipcRenderer.send("ping")

const router = useRouter()
const route = useRoute()

const globalErrorsList = ref<BaseError[]>([])

provide(ERRORS_LIST, {
  errors: globalErrorsList,
  addError: (error: BaseError) => globalErrorsList.value.push(error)
})
console.log("provided?..")

const chosenWork = ref()
const iDraggableInProcess = ref(false)
const iDraggableDisabled = ref(false)
const componentByCode = ref()
const isInitLoading = ref(true)

function choseWork(number) {}

function getWidgetByCode(widgetCode: string) {
  let tmpComponent
  switch (widgetCode) {
    case "clocks":
      tmpComponent = import("./widgets/datetime/clock/BaseClocks.vue")
    // tmpComponent = BaseClocks
    // return import('./widgets/datetime/clock/BaseClocks.vue')
    default:
      tmpComponent = import("./widgets/datetime/clock/BaseClocks.vue")
    // return import('./widgets/datetime/clock/BaseClocks.vue')
  }

  const asyncComponent = defineAsyncComponent({
    loader: async () => await tmpComponent,
    loadingComponent: h("div" as any, { isLoading: true }),
    delay: 0
  })

  return asyncComponent
}

async function fetch() {
  try {
    const response = await getUserWidgets(1)
    const response2 = await registerUser("hidow", "12345")

    console.log("resp", response2)
  } catch (error) {
    console.error("error while Fetching App.vue", error)
  } finally {
    isInitLoading.value = false
  }
}
// fetch()
const map = ref<null | YMap>(null)

// const asyncWidgetComponent = computed(() =>
//   defineAsyncComponent(() => {
//     return componentByCode.value
//   })
// )

const widgetList = ref([
  {
    name: "Часы",
    id: 1,
    code: "clocks"
  },
  { name: "Погода", id: 2, code: "weather" }
])

const secondWidgetList = ref([
  { name: "Календарь", id: 3, code: "calendar" },
  { name: "Почта", id: 4, code: "mail" }
])
function handlePush() {
  console.log("router", router)
  // router.push(routerKeys.AUTH.path)
}
</script>

<template>
  <!-- <yandex-map
    v-model="map"
    :settings="{
      location: {
        center: [37.617644, 55.755819],
        zoom: 9
      }
    }"
    width="100%"
    height="500px"
  >


    <BaseWeatherWidget />
    <MainGridPage></MainGridPage>

    <yandex-map-default-scheme-layer />
  </yandex-map> -->
  <router-view></router-view>
  <!-- <button  @click="handlePush">PUSH TO GET TO AUTH</button> -->
  <!-- <div v-if="isInitLoading"> -->
  <!-- <router-view></router-view> -->
  <!-- </div> -->
  <!-- <div v-else>LOADING...</div> -->

  <!-- <div class="drag-group">
    <draggable
      group="widgets"
      :list="widgetList"
      :disabled="iDraggableDisabled"
      class="list-group"
      item-key="code"
      ghost-class="ghost"
    >
      <template #item="{ element }">
        <div class="list-group-item">
          <component
            background-color="#131313"
            class="first-clocks"
            :is="getWidgetByCode(element.code)"
          ></component>
        </div>
      </template>
    </draggable>
    <draggable
      group="widgets"
      :list="secondWidgetList"
      :disabled="iDraggableDisabled"
      class="list-group"
      item-key="code"
      ghost-class="ghost"
    >
      <template #item="{ element }">
        <div class="second-list-group-item">
          <component
            background-color="azure"
            class="second-clocks"
            :is="getWidgetByCode(element.code)"
          ></component>
        </div>
      </template>
    </draggable>
  </div>
  <div class="button-group"></div>

  <Transition name="fade" mode="in-out"> </Transition> -->
</template>
<style scoped>
.text {
  background-color: darkslategray;
  border-radius: 5px;
  padding: 1rem;
}

.drag-group {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

.list-group-item {
  border-radius: 5px;
  margin-bottom: 5px;
  background-color: brown;
  width: 100%;
  cursor: move;
  text-align: center;
  &_raw {
    background-color: none;
  }
}

.second-list-group-item {
  border-radius: 5px;
  margin-bottom: 5px;
  background-color: burlywood;
  width: 100%;
  cursor: move;
  text-align: center;
  &_raw {
    background-color: none;
  }
}

.ghost {
  background-color: grey;
  opacity: 0.7;
}

.button-group {
  display: flex;
  flex-direction: row;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  transition: opacity 0.5s ease-in-out;
  opacity: 0;
}

.dashboard {
  width: 100%;
  margin: -20px -30px 0 -30px;
}

.vue-grid-layout {
  background: #eee;
}

.vue-grid-item:not(.vue-grid-placeholder) {
  background: #ccc;
  border: 1px solid black;
}

.vue-grid-item .resizing {
  opacity: 0.9;
}

.vue-grid-item .static {
  background: #cce;
}

.vue-grid-item .text {
  font-size: 24px;
  text-align: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: 100%;
  width: 100%;
}

.vue-grid-item .no-drag {
  height: 100%;
  width: 100%;
}

.vue-grid-item .minMax {
  font-size: 12px;
}

.vue-grid-item .add {
  cursor: pointer;
}

.vue-draggable-handle {
  position: absolute;
  width: 20px;
  height: 20px;
  top: 0;
  left: 0;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><circle cx='5' cy='5' r='5' fill='#999999'/></svg>")
    no-repeat;
  background-position: bottom right;
  padding: 0 8px 8px 0;
  background-repeat: no-repeat;
  background-origin: content-box;
  box-sizing: border-box;
  cursor: pointer;
}
</style>

<style lang="scss">
// Подключение transition-эффектов глобально
@import url("@/renderer/styles/transitions.scss");

* {
  font-family: "Geologica", sans-serif;
}

// Глобальное переопределение стилей для element plus

.el-form-item {
  flex-direction: column;
}

.el-calendar-day {
  color: cadetblue;
}

.el-input__wrapper {
  background-color: #f6f6f6;
}

.el-form-item__label {
  justify-content: flex-start;
}

.el-button.primary-gradient-button {
  background: linear-gradient(45deg, #626aef, #00adb5);
  transition: all ease-in-out 0.3s;
  color: white;
  border: none;

  &:hover {
    cursor: pointer;
    background: linear-gradient(45deg, #8086fc, #33e1eb);
    transition: all ease-in-out 0.3s;

    color: white;
  }
}

// Глобальные классы для размеров
.width-100 {
  width: 100%;
}

// Глобальные классы для отступов
.mt-1 {
  margin-top: 1rem;
}

// Глобальные классы для эффектов
.success-hover {
  transition: all ease-in 0.2s;

  &:hover {
    background-color: #00adb5;
  }
}
</style>
