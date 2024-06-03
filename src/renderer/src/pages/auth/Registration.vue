<template>
  <div class="register-block">
    <el-form>
      <el-form-item label="Email">
        <base-input v-model:text="email"></base-input>
      </el-form-item>
      <el-form-item label="Логин">
        <base-input v-model:text="login"></base-input>
      </el-form-item>
      <el-form-item label="Имя">
        <base-input v-model:text="name"></base-input>
      </el-form-item>
      <el-form-item label="Пароль">
        <base-input type="password" v-model:text="password"></base-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="onSubmit">Создать аккаунт</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import BaseInput from "@/renderer/src/shared/forms/BaseInput.vue"
import { registerUser } from "@/shared/api/requests/user/user"
import { addGlobalError } from "@/shared/helpers/errors/errors-actions"
import { ERRORS_LIST } from "@/shared/symbols/errors"
import { inject, ref } from "vue"

const isFetchLoading = ref(false)
const login = ref()
const email = ref()
const name = ref()
const password = ref()
const injectedError = inject(ERRORS_LIST)!
console.log("injErr:", injectedError)
// const { addError } = inject(ERRORS_LIST)

async function onSubmit() {
  try {
    isFetchLoading.value = true
    // const response = await getUserWidgets(1)
    const dto = {
      email: email.value,
      login: login.value,
      name: name.value,
      password: password.value
    }
    const response2 = await registerUser(dto)

    console.log("resp", response2)
  } catch (error) {
    addGlobalError(injectedError, error)
    // console.error("error while Fetching App.vue", error)
  } finally {
    isFetchLoading.value = false
  }
}

// const login = ref()
</script>
<style scoped lang="scss">
.register-block {
  width: 300px;
}
</style>
