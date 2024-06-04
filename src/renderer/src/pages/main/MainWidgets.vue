<script setup lang="ts">
// import { routerKeys } from "../../../src/shared/router/router-keys"
import { routerKeys } from "@/shared/router/router-keys"
// import BaseClocks from "../../widgets/datetime/clock/BaseClocks.vue"
import { BaseCalendar, BaseClocks, BaseTimeDisplay, BaseDateDisplay } from "../../widgets/datetime"

const ipcHandle = () => window.electron.ipcRenderer.send("ping")
</script>

<template>
  <div class="widgets-grid">
    <div class="widgets-grid__leftTop">
      <base-time-display time-format="12-hour"></base-time-display>
      <base-date-display time-format="24-hour"></base-date-display>
    </div>
    <base-calendar class="widgets-grid__centerTop"></base-calendar>
    <span class="widgets-grid__rightTop">'hi'</span>
    <span class="widgets-grid__left">'hi'</span>
    <span class="widgets-grid__center">'hi'</span>
    <span class="widgets-grid__right">'hi'</span>
  </div>
</template>
<style scoped lang="scss">
.widgets-grid {
  display: grid;
  grid-template-areas:
    "leftTop centerTop rightTop"
    "left center right"
    "leftBotton centerBottom rightBottom";
  grid-template-columns: 1fr 3fr 1fr;

  &__leftTop {
    grid-area: leftTop;
  }
  &__centerTop {
    grid-area: centerTop;
  }
  &__rightTop {
    grid-area: rightTop;
  }
  &__left {
    grid-area: left;
  }
  &__center {
    grid-area: center;
  }
  &__right {
    grid-area: right;
  }
}
</style>
