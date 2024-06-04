<template>
  <button class="base-button" :type="type">
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
import { ref } from "vue"

const props = withDefaults(
  defineProps<{
    //** submit — задаётся кнопкам для отправки формы. reset — добавляется кнопкам сброса формы.  */
    type?: "reset" | "submit" | "button"
    color?: "warning" | "info" | "primary" | "success" | "danger"
    isGradient?: boolean
    isLoading?: boolean
  }>(),
  {
    isGradient: false
  }
)
</script>

<style scoped lang="scss">
.base-button {
  position: relative;
  border: 0;
  border-radius: 5px;
  padding: 8px 15px;
  background: linear-gradient(45deg, #626aef, #00adb5);
  transition: all ease-in-out 0.3s;

  &:hover {
    cursor: pointer;
    background: linear-gradient(45deg, #8086fc, #33e1eb);
    color: white;
  }
}
</style>
