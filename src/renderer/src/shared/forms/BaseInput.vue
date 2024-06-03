<template>
  <el-input
    :placeholder="placeholder"
    :show-password="type == 'password'"
    :type="type"
    v-model="modelValue"
    show-word-limit
  />
</template>

<script setup lang="ts">
import { useVModel } from "@vueuse/core"

const props = withDefaults(
  defineProps<{
    text: string
    type?: string
    placeholder: string
  }>(),
  {}
)
const emits = defineEmits(["update:modelValue"])
const modelValue = useVModel(props, "text", emits)
</script>
