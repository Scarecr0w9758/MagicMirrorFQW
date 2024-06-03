<script setup lang="ts">
// import { routerKeys } from "../../../src/shared/router/router-keys"
import { routerKeys } from "@/shared/router/router-keys"
import MainWidgets from "./MainWidgets.vue"

const ipcHandle = () => window.electron.ipcRenderer.send("ping")
</script>

<template>
  <main-widgets></main-widgets>
  <router-view></router-view>
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
