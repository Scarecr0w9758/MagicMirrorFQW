<script setup lang="ts">
import { h, reactive, ref, defineAsyncComponent, computed, onMounted } from 'vue'
import { GridItem, GridLayout } from 'vue3-drr-grid-layout'
// import draggableComponent from 'vuedraggable';
import Draggable from 'vuedraggable/src/vuedraggable'

// const gridItemComponent = computed(() => VueGridLayout.GridItem)

// let GridLayout = VueGridLayout.GridLayout
// let GridItem = VueGridLayout.GridItem
// console.log(GridLayout)
// const gridLayoutComponent = computed(() => VueGridLayout.GridLayout)
const iDraggableDisabled = ref(false)

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

const thirdWidgetList = ref([
  { name: 'Календарь', id: 3, code: 'calendar' },
  { name: 'Почта', id: 4, code: 'mail' }
])
const forthWidgetList = ref([
  { name: 'Календарь', id: 3, code: 'calendar' },
  { name: 'Почта', id: 4, code: 'mail' }
])

function getWidgetByCode(widgetCode: string) {
  let tmpComponent
  switch (widgetCode) {
    case 'clocks':
      tmpComponent = import('./datetime/clock/BaseClocks.vue')
    // tmpComponent = BaseClocks
    // return import('./widgets/datetime/clock/BaseClocks.vue')
    default:
      tmpComponent = import('./datetime/clock/BaseClocks.vue')
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
</script>

<template>
  <div class="layout">
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
    <draggable
      group="widgets"
      :list="thirdWidgetList"
      :disabled="iDraggableDisabled"
      class="list-group"
      item-key="code"
      ghost-class="ghost"
    >
      <template #item="{ element }">
        <div class="third-list-group-item">
          <component
            background-color="#42d392"
            class="third-clocks"
            :is="getWidgetByCode(element.code)"
          ></component>
        </div>
      </template>
    </draggable>
    <draggable
      group="widgets"
      :list="forthWidgetList"
      :disabled="iDraggableDisabled"
      class="list-group"
      item-key="code"
      ghost-class="ghost"
    >
      <template #item="{ element }">
        <div class="forth-list-group-item">
          <component
            background-color="grey"
            class="forth-clocks"
            :is="getWidgetByCode(element.code)"
          ></component>
        </div>
      </template>
    </draggable>
  </div>
</template>
<style scoped lang="scss">
.layout {
  display: flex;
  height: 100%;
}
.text {
  padding: 0.5rem;
  background: linear-gradient(315deg, #42d392 25%, #647eff);
}
.dashboard {
  width: calc(100% + 60px);
  margin: -20px -30px 0 -30px;

  &__header {
    margin: 0 -20px;
    padding: 10px 10px;
    align-items: center;

    &__sticky {
      position: sticky;
      top: 65px;
      z-index: 3;
      background: rgba(246, 243, 243, 0.45);
      box-shadow: 0px 2px 10px 2px rgba(34, 60, 80, 0.2);
      border-radius: 10px;
    }
  }
  @media (max-width: 992px) {
    width: calc(100% + 30px);
    margin: -20px 0 0 -20px;

    &__header {
      margin: 0;
    }
  }
}
</style>
