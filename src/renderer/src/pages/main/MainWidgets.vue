<script setup lang="ts">
// import { routerKeys } from "../../../src/shared/router/router-keys"
import { routerKeys } from "@/shared/router/router-keys"
// import BaseClocks from "../../widgets/datetime/clock/BaseClocks.vue"
import { BaseCalendar, BaseClocks, BaseTimeDisplay } from "../../widgets/datetime"

const ipcHandle = () => window.electron.ipcRenderer.send("ping")
</script>

<template>
  <base-calendar></base-calendar>
  <base-time-display time-format="12-hour"></base-time-display>
</template>
<style scoped>
.text {
  background-color: darkslategray;
  border-radius: 5px;
  padding: 1rem;
}
</style>
