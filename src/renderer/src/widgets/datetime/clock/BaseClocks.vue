<script setup lang="ts">
import { ref, onUnmounted } from 'vue'
import dayjs from 'dayjs'

const props = withDefaults(
  defineProps<{
    backgroundColor: string | number
    isLoading?: boolean
  }>(),
  {
    backgroundColor: 'biege',
    isLoading: false
  }
)

const currentTime = ref(dayjs().format('HH:mm:ss'))
const currentHours = ref(dayjs().format('HH'))
const currentMinutes = ref(dayjs().format('mm'))
const currentSeconds = ref(dayjs().format('ss'))
let timeInterval = setInterval(() => {
  currentTime.value = dayjs().format('HH:mm:ss')
  currentHours.value = dayjs().format('HH')
  currentMinutes.value = dayjs().format('mm')
  currentSeconds.value = dayjs().format('ss')
}, 1000)
onUnmounted(() => clearInterval(timeInterval))
</script>

<template>
  <!-- {{ currentTime }} -->
  <div class="tmp-white">
    <div class="main-board">
      <div class="main-board__time-entity-block">
        <span class="main-board__time-entity-block__name">Hours</span>
        <span class="main-board__time-entity-block__entity">
          {{ currentHours }}
          <div class="main-board__time-entity-block__divider">&nbsp</div>
          <div class="main-board__time-entity-block__blur">&nbsp</div>
          <div class="main-board__time-entity-block__blur_gray">&nbsp</div>
        </span>
      </div>
      <div class="main-board__time-entity-block">
        <span class="main-board__time-entity-block__name"> &nbsp</span>
        <span class="main-board__time-entity-block__entity"> : </span>
      </div>
      <div class="main-board__time-entity-block">
        <span class="main-board__time-entity-block__name">Minutes</span>
        <span class="main-board__time-entity-block__entity">
          {{ currentMinutes }}
          <div class="main-board__time-entity-block__divider">&nbsp</div>
          <div class="main-board__time-entity-block__blur">&nbsp</div>
          <div class="main-board__time-entity-block__blur_gray">&nbsp</div>
        </span>
      </div>
      <div class="main-board__time-entity-block">
        <span class="main-board__time-entity-block__name"> &nbsp</span>
        <span class="main-board__time-entity-block__entity"> : </span>
      </div>
      <div class="main-board__time-entity-block">
        <span class="main-board__time-entity-block__name">Seconds</span>
        <span class="main-board__time-entity-block__entity">
          {{ currentSeconds }}
          <div class="main-board__time-entity-block__divider">&nbsp</div>
          <div class="main-board__time-entity-block__blur">&nbsp</div>
          <div class="main-board__time-entity-block__blur_gray">&nbsp</div>
        </span>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.tmp-white {
  overflow: hidden;
  padding: 1rem;
  background-color: v-bind(backgroundColor);
}
.main-board {
  font-family: 'Courier New', Courier;
  font-weight: 900;
  display: flex;
  padding: 1rem;
  gap: 1rem;
  background-color: #131313;
  &__time-entity-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    &__divider {
      top: 50%;
      position: absolute;
      z-index: 2;
      color: black;
      background-color: black;
      width: 45px;
      height: 1px;
    }

    &__blur {
      width: 50px;
      background-color: rgba(0, 0, 0, 0.4);
      // background: linear-gradient(#131313, black);
      filter: blur(3px);
      top: 0;
      left: -5px;
      z-index: -1;
      position: absolute;
      // filter: drop-shadow(5px 5px 5px white);
      // font-size: 30px;
      &_gray {
        width: 50px;
        height: 25px;
        background: linear-gradient(#131313, #474a51);
        filter: blur(3px);
        bottom: 0;
        left: -5px;
        z-index: -1;
        position: absolute;
      }
    }
    &__entity {
      z-index: 1;
      position: relative;
      // filter: drop-shadow(5px 5px 5px white);
      font-size: 30px;
    }
  }
}
/* .button-group {
  display: flex;
  flex-direction: row;
}*/
// .fade-enter-active,
// .fade-leave-active {
//   transition: opacity 0.5s ease-in-out;
// }

// .fade-enter-from,
// .fade-leave-to {
//   transition: opacity 0.5s ease-in-out;
//   opacity: 0;
// }
</style>
