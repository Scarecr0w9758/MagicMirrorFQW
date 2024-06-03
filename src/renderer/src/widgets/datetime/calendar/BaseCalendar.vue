<template>
  <el-calendar v-model="initValue" />
</template>

<script lang="ts" setup>
import { ref } from "vue"

const props = withDefaults(
  defineProps<{
    todayDate?: Date | string
    isLoading?: boolean
  }>(),
  {
    todayDate: new Date(),
    isLoading: false
  }
)

const initValue = ref(props.todayDate)
</script>
