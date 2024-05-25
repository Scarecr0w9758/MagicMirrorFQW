<script setup lang="ts">
import { h, reactive, ref, defineAsyncComponent, computed, onMounted } from 'vue'
import { GridItem, GridLayout } from 'vue3-drr-grid-layout'
import BaseClocks from './datetime/clock/BaseClocks.vue'

// const gridItemComponent = computed(() => VueGridLayout.GridItem)

const getWidgetByCode = (widgetCode: string) => {
  let tmpComponent
  switch (widgetCode) {
    case 'clocksDefault':
      tmpComponent = import('./datetime/clock/BaseClocks.vue')
      tmpComponent = BaseClocks
    default:
      tmpComponent = import('./datetime/clock/BaseClocks.vue')
      tmpComponent = BaseClocks
  }

  const asyncComponent = defineAsyncComponent({
    loader: async () => await tmpComponent,
    loadingComponent: h('div' as any, { isLoading: true })
  })

  return asyncComponent
}
// let GridLayout = VueGridLayout.GridLayout
// let GridItem = VueGridLayout.GridItem
// console.log(GridLayout)
// const gridLayoutComponent = computed(() => VueGridLayout.GridLayout)
const layout = [
  { x: 0, y: 0, w: 1, h: 2, i: '1', code: 'clocksDefault' },
  { x: 2, y: 2, w: 1, h: 1, i: '2' },
  { x: 4, y: 4, w: 2, h: 3, i: '3' },
  { x: 6, y: 6, w: 2, h: 3, i: '4' },
  { x: 8, y: 8, w: 2, h: 3, i: '5' },
  { x: 8, y: 8, w: 2, h: 3, i: '6' }
]
</script>

<template>
  <div class="layout">
    <GridLayout
      class="dashboard"
      v-model:layout="layout"
      :col-num="6"
      :row-height="60"
      :is-mirrored="false"
      autoSize
      preventCollision
      :use-css-transforms="true"
      :margin="[10, 10]"
    >
      <template #default="{ gridItemProps }">
        <GridItem
          v-for="item in layout"
          :x="item.x"
          v-bind="gridItemProps"
          :y="item.y"
          :w="item.w"
          :h="item.h"
          :i="item.i"
          :key="item.i"
        >
          <!-- class="text" -->
          <div style="background-color: aqua; padding: 1rem" v-if="item.code">
            <component
              background-color="#131313"
              class="first-clocks"
              :is="getWidgetByCode(item.code)"
            ></component>
          </div>
          <div v-else>hi</div>
          <!-- <div class="text" v-else>
            {{ item.i }}
          </div> -->
        </GridItem>
      </template>
    </GridLayout>
  </div>
</template>
<style scoped lang="scss">
.vue-grid-item.vue-grid-placeholder {
  background: green !important;
}
.layout {
  width: 100%;
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
