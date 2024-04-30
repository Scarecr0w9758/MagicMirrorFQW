<script setup lang="ts">
import { h, reactive, ref, defineAsyncComponent, computed, onMounted } from 'vue'
import BaseClocks from './widgets/datetime/clock/BaseClocks.vue'
import Draggable from 'vuedraggable/src/vuedraggable'
const ipcHandle = () => window.electron.ipcRenderer.send('ping')

const chosenWork = ref()
const iDraggableInProcess = ref(false)
const iDraggableDisabled = ref(false)
const componentByCode = ref()

function choseWork(number) {}

function getWidgetByCode(widgetCode: string) {
  let tmpComponent
  switch (widgetCode) {
    case 'clocks':
      tmpComponent = import('./widgets/datetime/clock/BaseClocks.vue')
    // tmpComponent = BaseClocks
    // return import('./widgets/datetime/clock/BaseClocks.vue')
    default:
      tmpComponent = import('./widgets/datetime/clock/BaseClocks.vue')
    // return import('./widgets/datetime/clock/BaseClocks.vue')
  }

  const asyncComponent = defineAsyncComponent({
    loader: async () => await tmpComponent,
    loadingComponent: h('div' as any, { isLoading: true }),
    delay: 0
  })

  return asyncComponent

  // componentByCode.value = defineAsyncComponent(() => {
  //   return tmpComponent
  // })
}

// const asyncWidgetComponent = computed(() =>
//   defineAsyncComponent(() => {
//     return componentByCode.value
//   })
// )

const widgetList = ref([
  {
    name: 'Часы',
    id: 1,
    code: 'clocks'
  },
  { name: 'Погода', id: 2, code: 'weather' }
])

const secondWidgetList = ref([
  { name: 'Календарь', id: 3, code: 'calendar' },
  { name: 'Почта', id: 4, code: 'mail' }
])
</script>

<template>
  <!-- <div class="list-group-item_raw" v-for="widget in widgetList" :key="widget.code">
    {{ widget }}
  </div> -->
  <div class="drag-group">
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
  <!-- <img alt="logo" class="logo" src="./assets/electron.svg" /> -->
  <div class="button-group"></div>

  <!-- <input value="" type="checkbox" /> -->
  <Transition name="fade" mode="in-out"> </Transition>
  <!-- <Versions /> -->
</template>
<style scoped>
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
</style>
