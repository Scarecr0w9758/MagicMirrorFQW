<script setup lang="ts">
import { ref, onUnmounted } from "vue"
import dayjs from "dayjs"

const props = withDefaults(
  defineProps<{
    timeFormat: "24-hour" | "12-hour"
    isLoading?: boolean
  }>(),
  {
    timeFormat: "24-hour",
    isLoading: false
  }
)

const currentDate = ref(dayjs().format("ddd, D MMM YYYY"))
const currentHours = ref(dayjs().format(props.timeFormat == "24-hour" ? "HH" : "hh"))
const currentMinutes = ref(dayjs().format("mm"))
const currentSeconds = ref(dayjs().format("ss"))
const currentDateFormat = ref(dayjs().format("a"))
// let timeInterval = setInterval(() => {
//   currentDate.value = dayjs().format("HH:mm:ss")
//   currentHours.value = dayjs().format(props.timeFormat == "24-hour" ? "HH" : "hh")
//   currentMinutes.value = dayjs().format("mm")
//   currentSeconds.value = dayjs().format("ss")
// }, 1000)
// onUnmounted(() => clearInterval(timeInterval))
</script>

<template>
  <!-- {{ currentDate }} -->
  <div class="time-block">
    <div>
      {{ currentDate }}
    </div>
    <!-- <div>
      {{ currentMinutes }}
    </div>
    <div>
      {{ currentDateFormat }}
    </div> -->
  </div>
</template>
<style scoped lang="scss">
.time-block {
  display: flex;
  gap: 1rem;
  font-size: 1.5rem;
  background-color: rgb(28, 28, 28);
}
</style>
