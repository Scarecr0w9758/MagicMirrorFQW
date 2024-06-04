<script setup lang="ts">
import { ref, onUnmounted } from "vue"
import dayjs from "dayjs"

const props = withDefaults(
  defineProps<{
    backgroundColor: string | number
    timeFormat: "24-hour" | "12-hour"
    isLoading?: boolean
  }>(),
  {
    backgroundColor: "biege",
    timeFormat: "24-hour",
    isLoading: false
  }
)

const currentTime = ref(dayjs().format("HH:mm:ss"))
const currentHours = ref(dayjs().format(props.timeFormat == "24-hour" ? "HH" : "hh"))
const currentMinutes = ref(dayjs().format("mm"))
const currentSeconds = ref(dayjs().format("ss"))
const currentTimeFormat = ref(dayjs().format("a"))
let timeInterval = setInterval(() => {
  currentTime.value = dayjs().format("HH:mm:ss")
  currentHours.value = dayjs().format(props.timeFormat == "24-hour" ? "HH" : "hh")
  currentMinutes.value = dayjs().format("mm")
  currentSeconds.value = dayjs().format("ss")
}, 1000)
onUnmounted(() => clearInterval(timeInterval))
</script>

<template>
  <!-- {{ currentTime }} -->
  <div class="time-block">
    <div class="time-block__hours-minutes">
      <div>
        {{ currentHours }}
      </div>
      <span>:</span>
      <div>
        {{ currentMinutes }}
      </div>
    </div>
    <div v-if="timeFormat == '12-hour'">
      {{ currentTimeFormat }}
    </div>
  </div>
</template>
<style scoped lang="scss">
.time-block {
  display: flex;
  gap: 0.5rem;
  font-size: 3rem;
  background-color: rgb(28, 28, 28);

  &__hours-minutes {
    display: flex;
    gap: 0.2rem;
  }
}
</style>
