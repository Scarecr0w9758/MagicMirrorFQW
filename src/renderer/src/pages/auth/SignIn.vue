<template>
  <base-input v-model:text="login"></base-input>
  <input label="email" type="text" show-word-limit :maxlength="10" />
  <input label="password" type="text" />
  <input type="checkbox" />
  <el-button>Войти</el-button>
</template>

<script setup lang="ts">
import BaseInput from "@/renderer/src/shared/forms/BaseInput.vue"
import { ref } from "vue"

const login = ref()
</script>
